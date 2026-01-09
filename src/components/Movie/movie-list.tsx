"use client"
import { UseMovieStore } from '@/app/stores/use-movie-store';
import AddMovie from './add-movie'
import EmptyState from './empty-state';
import MovieDisplay from './movie-display';
import { use, useEffect } from 'react';

function MovieList() {
    const { handleGetMovie, movies, enrichedMovies } = UseMovieStore()

    useEffect(() => {
        handleGetMovie()
    }, [handleGetMovie])

    return (
        <div className='wrapper p-4'>
            <AddMovie />
            {enrichedMovies.length > 0 ?
                <div>
                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-2'>
                        {enrichedMovies.map((m) => (
                            <MovieDisplay
                                key={m.id}
                                id={m.id}
                                title={m.title}
                                posterUrl={m.posterUrl}
                                backdropUrl={m.backdropUrl}
                                rate={m.rate}
                                voteAverage={Number(m.vote_average)}
                                voteCount={Number(m.vote_count)}
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