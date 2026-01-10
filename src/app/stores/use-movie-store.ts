"use client"
import { create } from 'zustand'
import { deleteMovie, getMovie, getMovieById, postMovie } from '../actions/movie.action'
import 'dotenv/config'
import { MovieDTO } from '@/types/movie';
import { TMDB_GENRES } from '@/lib/tmdb-constants';
import { toast } from 'sonner';

interface MovieState {
    isSubmitting: boolean;
    isSuccess: boolean;
    isError: boolean;
    isLoadingMovies: boolean;
    isLoadingMovieDetail: boolean,
    handlePostMovie: (formData: FormData) => Promise<void>;
    handleGetMovie: () => Promise<void>;
    movies: MovieDTO[];
    enrichedMovies: MovieDTO[];
    enrichedMoviesById: MovieDTO | null,
    handleGetMovieById: (params: Promise<{ id: string }>) => Promise<void>;
    handleDeleteMovie: (id: number) => Promise<void>;
}

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const searchMovie = async (movieName: string) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movieName)}`
    );

    const data = await res.json();
    return data;
};

export const UseMovieStore = create<MovieState>((set, get) => ({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    isLoadingMovies: false,
    isLoadingMovieDetail: false,
    movies: [],
    enrichedMovies: [],
    enrichedMoviesById: null,

    handlePostMovie: async (formData: FormData) => {
        set({ isSubmitting: true })
        const previousMovies = get().movies
        const previousEnrichedMovies = get().enrichedMovies
        const tempId = `temp-${Date.now()}`
        const title = formData.get("title") as string
        const rate = Number(formData.get("rate"))

        try {
            const res = await postMovie(formData)

            if (res.success) {
                const tmdbData = await searchMovie(title)
                const result = tmdbData.results[0]

                const optimisticMovies: MovieDTO = {
                    id: Number(tempId),
                    title: title,
                    rate: rate
                }

                const updatedMovie = await getMovie();
                const newMovie = updatedMovie[updatedMovie.length - 1]

                const enrichedMovies: MovieDTO = {
                    ...newMovie,
                    posterUrl: result?.poster_path ? `https://image.tmdb.org/t/p/w500${result.poster_path}` : "placeholder.png",
                    backdropUrl: result?.backdrop_path ? `https://image.tmdb.org/t/p/w500${result.backdrop_path}` : "placeholder.png",
                    voteAverage: result?.vote_average ? result.vote_average : null,
                    voteCount: result?.vote_count ? result.vote_count : null,
                    popularity: result?.popularity ? result.popularity : null,
                    overview: result?.overview ? result.overview : null
                }
                set({
                    isSuccess: true,
                    isError: false,
                    movies: [...previousMovies, optimisticMovies],
                    enrichedMovies: [...previousEnrichedMovies, enrichedMovies]
                })
            } else {
                set({
                    isError: true,
                    isSuccess: false
                })
            }
        } catch (error) {
            console.log(error)
        } finally {
            set({ isSubmitting: false })
        }
    },

    handleGetMovie: async () => {
        set({ isLoadingMovies: true })

        try {
            const movies = await getMovie()
            set({ movies })

            const movieWithTMDBData = await Promise.all(
                movies.map(async (movie) => {
                    const tmdbData = await searchMovie(movie.title);
                    const result = tmdbData.results[0];
                    return {
                        ...movie,
                        posterUrl: result?.poster_path ? `https://image.tmdb.org/t/p/w500${result.poster_path}` : "placeholder.png",
                        backdropUrl: result?.backdrop_path ? `https://image.tmdb.org/t/p/w500${result.backdrop_path}` : "placeholder.png",
                        voteAverage: result?.vote_average ? result.vote_average : null,
                        voteCount: result?.vote_count ? result.vote_count : null,
                        popularity: result?.popularity ? result.popularity : null,
                        overview: result?.overview ? result.overview : null
                    }
                })
            )
            set({ enrichedMovies: movieWithTMDBData })
        } catch (error) {
            console.log(error)
        } finally {
            set({ isLoadingMovies: false })
        }
    },

    handleGetMovieById: async (params) => {
        set({ isLoadingMovieDetail: true })

        try {
            const { id } = await params

            const movie = await getMovieById(parseInt(id))

            if (!movie || !movie.title) return;

            const tmdbData = await searchMovie(movie?.title);
            const result = tmdbData.results[0]

            const movieWithTMDBData: MovieDTO = {
                ...movie,
                posterUrl: result?.poster_path ? `https://image.tmdb.org/t/p/w500${result.poster_path}` : "placeholder.png",
                backdropUrl: result?.backdrop_path ? `https://image.tmdb.org/t/p/w500${result.backdrop_path}` : "placeholder.png",
                voteAverage: result?.vote_average ? result.vote_average : null,
                voteCount: result?.vote_count ? result.vote_count : null,
                popularity: result?.popularity ? result.popularity : null,
                overview: result?.overview ? result.overview : null,
                genre: result?.genre_ids ? result.genre_ids.map((id: number) => TMDB_GENRES[id.toString()]).filter(Boolean) : null,
                releaseDate: result?.release_date ? result.release_date : null
            }

            set({ enrichedMoviesById: movieWithTMDBData })
        } catch (error) {
            console.log(error)
        } finally {
            set({ isLoadingMovieDetail: false })
        }
    },

    handleDeleteMovie: async (id: number) => {
        try {
            await deleteMovie(id)
            toast.success("Movie has been deleted successfully")
        } catch (error) {
            console.log(error)
        }
    }
}))