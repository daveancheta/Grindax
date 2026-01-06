import MovieList from "@/components/Movie/movie-list"
import { SignIn } from "@clerk/nextjs"

export default function Home() {
  return (
    <div>
      <MovieList />
    </div>
  )
}
