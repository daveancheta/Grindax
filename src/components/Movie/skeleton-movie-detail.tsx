import { Skeleton } from '../ui/skeleton'

function SkeletonMovieDetail() {
    return (
        <div className='min-h-screen'>
            <div className='wrapper py-8 sm:py-12 lg:py-16'>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12 items-start lg:items-start'>
                    <div className='w-full lg:w-auto shrink-0 mx-auto lg:mx-0'>
                        <Skeleton className='rounded-xl w-full sm:max-w-md lg:w-[400px] xl:w-[450px] aspect-2/3' />
                    </div>

                    <div className='flex-1 w-full space-y-6 lg:space-y-8'>
                        <div className='space-y-4'>
                            <Skeleton className='h-8 sm:h-10 lg:h-12 xl:h-14 w-full sm:w-5/6 lg:w-4/5 xl:w-3/4 rounded-md' />
                            
                            <div className='flex flex-wrap items-center gap-3'>
                                <Skeleton className='h-10 sm:h-11 w-20 sm:w-24 rounded-lg' />
                                <Skeleton className='h-10 sm:h-11 w-24 sm:w-28 rounded-lg' />
                                <Skeleton className='h-10 sm:h-11 w-24 sm:w-28 rounded-lg' />
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <Skeleton className='h-4 sm:h-5 w-28 sm:w-32 rounded-md' />
                            <Skeleton className='h-6 sm:h-7 w-40 sm:w-48 rounded-md' />
                        </div>

                        <div className='space-y-3'>
                            <Skeleton className='h-4 sm:h-5 w-20 sm:w-24 rounded-md' />
                            <div className='flex flex-wrap gap-2'>
                                <Skeleton className='h-7 sm:h-8 w-16 sm:w-20 rounded-full' />
                                <Skeleton className='h-7 sm:h-8 w-20 sm:w-24 rounded-full' />
                                <Skeleton className='h-7 sm:h-8 w-14 sm:w-16 rounded-full' />
                                <Skeleton className='h-7 sm:h-8 w-20 sm:w-24 rounded-full' />
                            </div>
                        </div>

                        <div className='space-y-3 pt-2'>
                            <Skeleton className='h-4 sm:h-5 w-24 sm:w-28 rounded-md' />
                            <div className='space-y-2 max-w-3xl'>
                                <Skeleton className='h-4 sm:h-5 w-full rounded-md' />
                                <Skeleton className='h-4 sm:h-5 w-full rounded-md' />
                                <Skeleton className='h-4 sm:h-5 w-11/12 sm:w-5/6 rounded-md' />
                                <Skeleton className='h-4 sm:h-5 w-10/12 sm:w-4/5 rounded-md' />
                                <Skeleton className='h-4 sm:h-5 w-9/12 sm:w-3/4 rounded-md' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonMovieDetail
