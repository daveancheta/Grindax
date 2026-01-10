"use client"
import { getMovieById } from '@/app/actions/movie.action'
import { UseMovieStore } from '@/app/stores/use-movie-store';
import { useEffect } from 'react';

function Movie({ params }: { params: Promise<{ id: string }> }) {
    const { handleGetMovieById, enrichedMoviesById } = UseMovieStore()

    useEffect(() => {
        handleGetMovieById(params)
    }, [handleGetMovieById])

    return (
        <div>
            <img className='absolute inset-0 w-screen h-screen' src={enrichedMoviesById?.backdropUrl} alt="" />
            <div className='fixed inset-0 w-screen h-screen backdrop-blur-lg bg-black/30'></div>
            <div className='wrapper p-4 flex items-center'>
                <div className='relative'>
                    <img className='object-cover rounded-md sm:w-100 h-full' src={enrichedMoviesById?.posterUrl} alt="" />
                    <div className='absolute bottom-0 w-full sm:w-100 h-20 bg-linear-to-t from-black/90 to-transparent rounded-md'></div>
                </div>
            </div>
        </div>
    )
}

export default Movie