import MovieList from "@/components/Movie/movie-list"
import { SignIn } from "@clerk/nextjs"

export default function Home() {
  return (
    <div className="w-screen">
      <MovieList />
    </div>
  )
}
