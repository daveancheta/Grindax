"use client"
import { getMovieById } from '@/app/actions/movie.action'
import { UseMovieStore } from '@/app/stores/use-movie-store';
import { MovieDTO } from '@/types/movie';
import { useEffect } from 'react';

function Movie({ params }: { params: Promise<{ id: string }> }) {
    const { handleGetMovieById, enrichedMoviesById } = UseMovieStore()

    useEffect(() => {
        handleGetMovieById(params)
    }, [handleGetMovieById])

    return (
        <div className='wrapper p-4'>
            <h1>{enrichedMoviesById?.title}</h1>
            <img className='object-cover' src={enrichedMoviesById?.posterUrl} alt="" />
        </div>
    )
}

export default Movie