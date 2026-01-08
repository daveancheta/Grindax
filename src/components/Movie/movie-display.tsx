"use client"
import { cn } from '@/lib/utils';
import { Flame, Star, Vote } from 'lucide-react';
import { useState } from 'react';

interface MovieDTO {
    id: number;
    title: string;
    rate: number;
    posterUrl: string;
    backdropUrl: string;
    voteAverage: number;
    voteCount: number;
    popularity: number
    overview: string;
}

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
                                max-h-110 object-cover' src={posterUrl}
                    draggable={false} alt="" />
                <div className='absolute bottom-0 left-0 w-full 
                        bg-linear-to-t from-black/70 to-transparent p-4 flex flex-col 
                        sm:flex-row justify-between items-start sm:items-center'>
                    <h1 className='text-xs xl:text-lg font-bold'>{title}</h1>
                    <span className='text-sm font-medium flex items-center gap-1'>
                        <Star className='size-4 fill-yellow-500 text-yellow-500' />
                        {rate}</span>
                </div>
                <div className={cn('absolute top-0 left-0 w-full h-full backdrop-blur rounded-md scale-100 opacity-100 transition-all duration-300',
                    isHover !== id && "opacity-0 scale-0"
                )}></div>


            </div>

            <div className={cn('sm:absolute sm:border border-0 rounded-b-sm fixed sm:top-10 top-50 sm:left-0 -left-2 z-40 scale-100 opacity-100 transition-all duration-300 sm:mx-2 mx-8 sm:max-w-70',
                isHover !== id && "opacity-0 scale-0")}
                onMouseEnter={() => {
                    setIsHover(id)
                }}
                onMouseLeave={() => {
                    setIsHover(0)
                }}>
                <div className='relative'>
                    <img className='object-cover rounded-t-sm' src={backdropUrl} alt="" draggable={false} />
                    <div className='absolute bottom-0 bg-linear-to-t from-black/70 to-transparent w-full h-10'></div>
                </div>

                <div className='bg-background rounded-b-sm p-3 flex flex-col 
                sm:items-start item-center gap-2'>
                    <span className='text-sm font-medium flex items-center gap-1'>
                        <Star className='size-5 fill-yellow-500 text-yellow-500 truncate' />
                        {voteAverage.toFixed(1)} - TMDB
                    </span>
                    <span className='text-sm font-medium flex items-center gap-1'>
                        <Vote className='size-5 text-green-500 truncate' />
                        {voteCount.toLocaleString("en-PH")} - TMDB
                    </span>
                    <span className='text-sm font-medium flex items-center gap-1'>
                        <Flame className='size-5 text-red-500 fill-red-500 truncate' />
                        {popularity.toFixed(1)} - TMDB
                    </span>
                    <p className='wrap-break-word w-fit'>
                        {overview.length > 120 ? <>
                            {overview.slice(0, 120) + '...'}<button className='font-bold cursor-pointer'>see more</button>
                        </>
                            :
                            overview}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MovieDisplay