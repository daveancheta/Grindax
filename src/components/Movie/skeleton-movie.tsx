import { Skeleton } from '../ui/skeleton'

function SkeletonMovie() {
    return (
        <div className='wrapper p-4'>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {Array.from({ length: 8}).map((_, index) => (
                    <div key={index} className='mb-4'>
                        <Skeleton className="w-full aspect-2/3 min-h-[130px] rounded-md" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkeletonMovie