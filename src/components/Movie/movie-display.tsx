"use client"
import { cn } from '@/lib/utils';
import { MovieDTO } from '@/types/movie';
import { Flame, Star, Vote } from 'lucide-react';
import { useState } from 'react';

function MovieDisplay({ id, title, posterUrl, rate, backdropUrl,
    voteAverage, voteCount, popularity, overview
}: MovieDTO) {
    const [isHover, setIsHover] = useState<number>(0)
    return (
        <div className='relative select-none'>
            <div key={id} className='relative mb-4'
                onMouseEnter={() => {
                    setIsHover(id)
                }}
                onMouseLeave={() => {
                    setIsHover(0)
                }}>
                <img className='rounded-md border border-white w-full 
                                max-h-110 sm:min-h-110 object-cover' src={posterUrl && posterUrl.length !== 24 ? posterUrl : "placeholder.png"}
                    draggable={false} alt="" />
                <div className='absolute bottom-0 left-0 w-full 
                        bg-linear-to-t from-black/70 to-transparent p-4 flex flex-col 
                        sm:flex-row justify-between items-start sm:items-center'>
                    <h1 className='text-xs xl:text-lg font-bold capitalize'>{title}</h1>
                    <span className='text-sm font-medium flex items-center gap-1'>
                        <Star className='size-4 fill-yellow-500 text-yellow-500' />
                        {rate}</span>
                </div>
                <div className={cn('absolute top-0 left-0 w-full h-full backdrop-blur rounded-md scale-100 opacity-100 transition-all duration-300',
                    isHover !== id && "opacity-0 scale-0"
                )}></div>


            </div>

            <div className={cn('sm:absolute border-0 rounded-b-sm fixed sm:top-10 top-50 sm:left-0 -left-2 z-40 scale-100 opacity-100 transition-all duration-300 sm:mx-2 mx-8 sm:max-w-70',
                isHover !== id && "opacity-0 scale-0")}
                onMouseEnter={() => {
                    setIsHover(id)
                }}
                onMouseLeave={() => {
                    setIsHover(0)
                }}>

                <div className='relative'>
                    <img className='object-cover rounded-t-sm max-h-50 min-w-75 sm:min-w-70' src={backdropUrl && backdropUrl.length !== 24 ? backdropUrl : "placeholder.png"} alt="" draggable={false} />
                    <div className='absolute bottom-0 bg-linear-to-t from-black/70 to-transparent w-full h-10'></div>
                </div>

                <div className='bg-background rounded-b-sm p-3 flex flex-col 
                sm:items-start item-center gap-2'>
                    <span className='text-sm font-medium flex items-center gap-1'>
                        <Star className='size-5 fill-yellow-500 text-yellow-500 truncate' />
                        {voteAverage !== null ? voteAverage?.toFixed(1) : "Undefined"} - TMDB
                    </span>
                    <span className='text-sm font-medium flex items-center gap-1'>
                        <Vote className='size-5 text-green-500 truncate' />
                        {voteCount !== null ? voteCount?.toLocaleString("en-PH") : "Undefined"} - TMDB
                    </span>
                    <span className='text-sm font-medium flex items-center gap-1'>
                        <Flame className='size-5 text-red-500 fill-red-500 truncate' />
                        {popularity !== null ? popularity?.toFixed(1) : "Undefined"} - TMDB
                    </span>
                    <p className='wrap-break-word w-fit'>
                        {overview && overview.length > 120 ? <>
                            {overview?.slice(0, 120) + '...'}<button className='font-bold cursor-pointer'>see more</button>
                        </>
                            :
                            overview || overview === null && "Undefined"}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MovieDisplay