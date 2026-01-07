import { Star } from 'lucide-react'
import AddMovie from './add-movie'

const MovieItem = [
    {
        id: 1,
        title: "Avengers: Endgame",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBV4DwisDoIO-v1M44sNNYtyOM2GSL3q-vijXQyB_VDuZqyop8NgiZQajBO-3oqbbzfuXIcA&s=10",
        rate: 8.4
    },
    {
        id: 2,
        title: "Avengers: Infinity War",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiy9vZsPzLtmD7BUSRnwUrEEM3b-wRzgWEndERcCGBTZp-chAmggbfyF_Q0-hHWgOVhjE66w&s=10",
        rate: 8.4
    },
    {
        id: 3,
        title: "Avengers: Doomsday",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZO76u9xvtqEP3l0FC3A0GEY6d2Cg-226l0ZFaP0LsSN1_K0CoUqrm8aPp5IdOkPE1gZS8_A&s=10",
        rate: 8.4
    },
    {
        id: 4,
        title: "Captain America: Civil War",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZDcU1Y5lK4ZQd7Spd1iNPCzDXtao4iTUgsSDmRWP9nKOwLZCEpcimJ_TGjhNUR8oSZWP&s=10",
        rate: 8.4
    },
    {
        id: 5,
        title: "Redeeming Love",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFD1myOVwWYzITfo1FgkuAi1Cf7xU83pPLeJj6DdCypzNazgdVJt8vSpnRyVWziYnxJcK8cg&s=10",
        rate: 8.4
    },
    {
        id: 6,
        title: "Red Notice",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1hCDJCRU--M2ya7aX2kn2MOARr82PKrC4PTZcEbhfHcNpsIax3ZWBWh5BbnAn6bHUc5Ke&s=10",
        rate: 8.4
    },
    {
        id: 7,
        title: "The Union",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNfipYHuzjFSCqYFSRyR4LF_htbu9udK4LCY2ku5VHJc9orGBAlQjIFHp76vGLWM7hMX6Gsg&s=10",
        rate: 8.4
    },
    {
        id: 8,
        title: "My Girlfriend Is A Serial Killer",
        imgUrl: "https://m.media-amazon.com/images/M/MV5BMDFhNGQ2ZjgtNDA0Yy00OTk0LWE4NzYtYmY3YjBiMTM2ZWI2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        rate: 8.4
    }
]

function MovieList() {
    return (
        <div className='wrapper p-4'>
            <AddMovie />
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-2'>
                {MovieItem.map((m) => (
                    <div key={m.id} className='relative mb-4'>
                        <img className='rounded-md border border-white w-full h-full' src={m.imgUrl} alt="" />
                        <div className='absolute bottom-0 left-0 w-full 
                        bg-linear-to-t from-secondary/70 to-transparent p-4 flex justify-between items-center'>
                            <h1 className='text-sm xl:text-lg font-bold'>{m.title}</h1>
                            <span className='text-sm font-medium flex items-center gap-1'>
                                <Star className='size-4 fill-yellow-500 text-yellow-500' />
                                {m.rate}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieList