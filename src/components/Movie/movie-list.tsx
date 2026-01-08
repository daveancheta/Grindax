import { Star } from 'lucide-react'
import AddMovie from './add-movie'
import { getMovie, MovieDTO } from '@/app/actions/movie.action'
import EmptyState from './empty-state';
import MovieDisplay from './movie-display';

async function MovieList() {
    const movie: MovieDTO[] = await getMovie();
    const TMDB_API_KEY = process.env.TMDB_API_KEY;

    const searchMovie = async (movieName: string) => {
        const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movieName)}`
        );

        const data = await res.json();
        return data;
    };

    const movieWithPoster = await Promise.all(
        movie.map(async (movie) => {
            const tmdbData = await searchMovie(movie.title);
            const res = tmdbData.results[0];
            return {
                ...movie,
                posterUrl: res?.poster_path ? `https://image.tmdb.org/t/p/w500${res.poster_path}` : "https://placeholder.jpeg",
                backdropUrl: res?.backdrop_path ? `https://image.tmdb.org/t/p/w500${res.backdrop_path}` : "https://placeholder.jpeg",
                voteAverage: res?.vote_average ? res.vote_average : 0,
                voteCount: res?.vote_count ?  res.vote_count : 0,
                popularity: res?.popularity ? res.popularity : 0,
                overview: res?.overview ? res.overview : ""
            }
        })
    )

    return (
        <div className='wrapper p-4'>
            <AddMovie />
            {movieWithPoster.length > 0 ?
                <div>
                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-2'>
                        {movieWithPoster.map((m) => (
                           <MovieDisplay
                           key={m.id}
                           id={m.id}
                           title={m.title}
                           posterUrl={m.posterUrl}
                           backdropUrl={m.backdropUrl}
                           rate={m.rate}
                           voteAverage={Number(m.voteAverage)}
                           voteCount={m.voteCount}
                           popularity={m.popularity}
                           overview={m.overview}/>

                        ))}
                    </div>
                </div>
                :
                <div>
                    <EmptyState />
                </div>
            }
        </div>
    )
}

export default MovieList