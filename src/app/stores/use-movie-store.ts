import { create } from 'zustand'
import { getMovie, MovieDTO, postMovie } from '../actions/movie.action'
import 'dotenv/config'

interface MovieState {
    isSubmitting: boolean;
    isSuccess: boolean;
    isError: boolean;
    handlePostMovie: (formData: FormData) => Promise<void>;
    handleGetMovie: () => Promise<void>;
    movies: MovieDTO[];
    enrichedMovies: MovieDTO[];
}

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const searchMovie = async (movieName: string) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movieName)}`
    );

    const data = await res.json();
    return data;
};

export const UseMovieStore = create<MovieState>((set) => ({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    movies: [],
    enrichedMovies: [],

    handlePostMovie: async (formData: FormData) => {
        set({ isSubmitting: true })

        try {
            const res = await postMovie(formData)
            if (res.success) {
                set({ isSuccess: true })
                set({ isError: false })
            } else {
                set({ isError: true })
                set({ isSuccess: false })
            }
        } catch (error) {
            console.log(error)
        } finally {
            set({ isSubmitting: false })
        }
    },

    handleGetMovie: async () => {
        try {
            const movies = await getMovie()
            set({ movies })

            const movieWithTMDBData = await Promise.all(
                movies.map(async (movie) => {
                    const tmdbData = await searchMovie(movie.title);
                    const result = tmdbData.results[0];
                    return {
                        ...movie,
                        posterUrl: result?.poster_path ? `https://image.tmdb.org/t/p/w500${result.poster_path}` : "https://placeholder.jpeg",
                        backdropUrl: result?.backdrop_path ? `https://image.tmdb.org/t/p/w500${result.backdrop_path}` : "https://placeholder.jpeg",
                        voteAverage: result?.vote_average ? result.vote_average : 0,
                        voteCount: result?.vote_count ? result.vote_count : 0,
                        popularity: result?.popularity ? result.popularity : 0,
                        overview: result?.overview ? result.overview : ""
                    }
                })
            )
            set({ enrichedMovies: movieWithTMDBData })
        } catch (error) {
            console.log(error)
        }
    }
}))