"use client"
import { useIsMobile } from '@/app/hooks/use-mobile';
import { UseMovieStore } from '@/app/stores/use-movie-store';
import SkeletonMovieDetail from '@/components/Movie/skeleton-movie-detail';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Flame, MoreHorizontalIcon, Star, Vote } from 'lucide-react';
import { useEffect } from 'react';

export const genreColors: Record<string, string> = {
    "Action": "bg-red-600 text-white",
    "Adventure": "bg-orange-600 text-white",
    "Animation": "bg-pink-500 text-white",
    "Comedy": "bg-yellow-500 text-black",
    "Crime": "bg-gray-800 text-white",
    "Documentary": "bg-blue-600 text-white",
    "Drama": "bg-purple-600 text-white",
    "Family": "bg-green-600 text-white",
    "Fantasy": "bg-violet-600 text-white",
    "History": "bg-amber-700 text-white",
    "Horror": "bg-red-900 text-white",
    "Music": "bg-fuchsia-600 text-white",
    "Mystery": "bg-indigo-700 text-white",
    "Romance": "bg-rose-600 text-white",
    "Science Fiction": "bg-cyan-600 text-white",
    "TV Movie": "bg-slate-600 text-white",
    "Thriller": "bg-red-700 text-white",
    "War": "bg-stone-700 text-white",
    "Western": "bg-orange-700 text-white"
}

export function getGenreColors(genre: string): string {
    return genreColors[genre] || ""
}


function Movie({ params }: { params: Promise<{ id: string }> }) {
    const { handleGetMovieById, enrichedMoviesById, isLoadingMovieDetail } = UseMovieStore()
    const isMobile = useIsMobile();

    useEffect(() => {
        handleGetMovieById(params)
    }, [handleGetMovieById])

    if (isLoadingMovieDetail) return <SkeletonMovieDetail />

    return (
        <div className='relative min-h-screen'>
            {/* Background backdrop image */}
            <div className='fixed inset-0 w-full h-full -z-10'>
                <img
                    className='object-cover w-full h-full'
                    src={enrichedMoviesById?.backdropUrl}
                    alt={`${enrichedMoviesById?.title} backdrop`}
                />
                <div className='absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/80'></div>
                <div className='fixed inset-0 backdrop-blur-sm bg-black/20'></div>
            </div>

            {/* Main content */}
            <div className='relative z-10 min-h-screen'>
                <div className='wrapper py-8 sm:py-12 lg:py-16'>
                    <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12 items-start lg:items-start'>
                        <div className='relative w-full lg:w-auto shrink-0 mx-auto lg:mx-0'>
                            <div className='relative group'>
                                <img className='object-cover rounded-xl w-full sm:max-w-md h-full flex-1' src={isMobile ? enrichedMoviesById?.backdropUrl : enrichedMoviesById?.posterUrl} alt="" />
                                <div className='absolute inset-0 rounded-xl bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </div>
                        </div>

                        <div className='flex-1 w-full space-y-6 lg:space-y-8 text-white'>
                            <div className='space-y-4'>
                                <div className='flex flex-row items-center gap-2'>
                                    <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight drop-shadow-lg uppercase'>
                                        {enrichedMoviesById?.title}
                                    </h1>
                                    <DropdownMenu modal={false}>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="outline" aria-label="Open menu" size="icon-sm">
                                                <MoreHorizontalIcon />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-40" align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem variant='destructive'>
                                                    Delete
                                                </DropdownMenuItem>

                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>


                                <div className='flex flex-wrap items-center gap-3'>
                                    <div className='flex items-center gap-2 px-4 py-2.5 backdrop-blur-md bg-white/20 rounded-lg border border-white/30 shadow-lg hover:bg-white/30 transition-colors'>
                                        <Star className='w-5 h-5 text-yellow-400 fill-yellow-400' />
                                        <span className='font-semibold text-sm sm:text-base'>
                                            {enrichedMoviesById?.voteAverage?.toFixed(1)}
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-2 px-4 py-2.5 backdrop-blur-md bg-white/20 rounded-lg border border-white/30 shadow-lg hover:bg-white/30 transition-colors'>
                                        <Vote className='w-5 h-5 text-green-400' />
                                        <span className='font-semibold text-sm sm:text-base'>
                                            {enrichedMoviesById?.voteCount?.toLocaleString('en-PH')}
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-2 px-4 py-2.5 backdrop-blur-md bg-white/20 rounded-lg border border-white/30 shadow-lg hover:bg-white/30 transition-colors'>
                                        <Flame className='w-5 h-5 text-orange-400 fill-orange-400' />
                                        <span className='font-semibold text-sm sm:text-base'>
                                            {enrichedMoviesById?.popularity?.toFixed(1)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {enrichedMoviesById?.releaseDate && (
                                <div className='space-y-2'>
                                    <h6 className='font-semibold uppercase text-sm sm:text-base text-white/80 tracking-wide'>
                                        Release Date
                                    </h6>
                                    <p className='font-bold text-lg sm:text-xl text-white'>
                                        {new Date(enrichedMoviesById.releaseDate).toLocaleDateString('en-US', {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric"
                                        })}
                                    </p>
                                </div>
                            )}

                            {enrichedMoviesById?.genre && enrichedMoviesById.genre.length > 0 && (
                                <div className='space-y-3'>
                                    <h6 className='font-semibold uppercase text-sm sm:text-base text-white/80 tracking-wide'>
                                        Genres
                                    </h6>
                                    <div className='flex flex-wrap gap-2'>
                                        {enrichedMoviesById.genre.map((genreName: string, index: number) => (
                                            <Badge
                                                className={`${getGenreColors(genreName)} text-xs sm:text-sm px-3 py-1.5 font-semibold shadow-md hover:scale-105 transition-transform`}
                                                key={index}
                                            >
                                                {genreName}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {enrichedMoviesById?.overview && (
                                <div className='space-y-3 pt-2'>
                                    <h6 className='font-semibold uppercase text-sm sm:text-base text-white/80 tracking-wide'>
                                        Overview
                                    </h6>
                                    <p className='text-base sm:text-lg leading-relaxed text-white/90 max-w-3xl drop-shadow-md'>
                                        {enrichedMoviesById.overview}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie