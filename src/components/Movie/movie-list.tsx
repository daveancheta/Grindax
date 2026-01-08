import { Star } from 'lucide-react'
import AddMovie from './add-movie'
import { getMovie, MovieDTO } from '@/app/actions/movie.action'
import EmptyState from './empty-state';

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
            const res = tmdbData.results[0]
            return {
                ...movie,
                posterUrl: `https://image.tmdb.org/t/p/w500${res.poster_path}`
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
                            <div key={m.id} className='relative mb-4'>
                                <img className='rounded-md border border-white w-full 
                                h-full object-cover' src={m.posterUrl} alt="" />
                                <div className='absolute bottom-0 left-0 w-full 
                        bg-linear-to-t from-black/70 to-transparent   p-4 flex flex-col 
                        sm:flex-row justify-between items-start sm:items-center'>
                                    <h1 className='text-xs xl:text-lg font-bold'>{m?.title}</h1>
                                    <span className='text-sm font-medium flex items-center gap-1'>
                                        <Star className='size-4 fill-yellow-500 text-yellow-500' />
                                        {m?.rate}</span>
                                </div>
                            </div>

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