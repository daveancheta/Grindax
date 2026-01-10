"use client"
import { UseMovieStore } from '@/app/stores/use-movie-store';
import AddMovie from './add-movie'
import EmptyState from './empty-state';
import MovieDisplay from './movie-display';
import { useEffect } from 'react';
import SkeletonMovie from './skeleton-movie';

function MovieList() {
    const { handleGetMovie, enrichedMovies, isLoadingMovies } = UseMovieStore()

    useEffect(() => {
        handleGetMovie()
    }, [handleGetMovie])

    if(isLoadingMovies) return <SkeletonMovie/>;

    return (
        <div className='wrapper p-4'>
            <AddMovie />
            {enrichedMovies.length > 0 ?
                <div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
                        {enrichedMovies.map((m) => (
                            <MovieDisplay
                                key={m.id}
                                id={m.id}
                                title={m.title}
                                posterUrl={m.posterUrl}
                                backdropUrl={m.backdropUrl}
                                rate={m.rate}
                                voteAverage={m.voteAverage}
                                voteCount={m.voteCount}
                                popularity={m.popularity}
                                overview={m.overview} />
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