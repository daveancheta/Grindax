import HeroSection from "@/components/landing-page/hero-section"
import TutorialSection from "@/components/landing-page/tutorial-section"
import EmptyState from "@/components/Movie/empty-state"
import MovieList from "@/components/Movie/movie-list"
import { SignedIn, SignedOut } from "@clerk/nextjs"

export default function Home() {
  return (
    <div>
      <SignedIn>
        <MovieList />
      </SignedIn>
      <SignedOut>
        <HeroSection/>
        <TutorialSection/>
      </SignedOut>
    </div>
  )
}
