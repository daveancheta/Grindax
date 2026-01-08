import { Star } from 'lucide-react'
import AddMovie from './add-movie'
import { getMovie, MovieDTO } from '@/app/actions/movie.action'
import EmptyState from './empty-state';

async function MovieList() {
    const movie: MovieDTO[] = await getMovie();

    return (
        <div className='wrapper p-4'>
            <AddMovie />
            {movie.length > 0 ?
                <div>
                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-2'>
                        {movie.map((m) => (
                            <div key={m.id} className='relative mb-4'>
                                <img className='rounded-md border border-white w-full 
                                h-full object-cover' src={m?.imgURL} alt="" />
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