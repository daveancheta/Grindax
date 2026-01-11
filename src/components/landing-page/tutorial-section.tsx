import { SignInButton, SignUpButton } from '@clerk/nextjs'
import { Button } from '../ui/button'

function TutorialSection() {
  return (
    <section className="wrapper py-16 sm:py-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="relative flex items-center justify-center lg:justify-start">
          <div className="relative w-full max-w-lg">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-black/20">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/IeGImzHcjR8?autoplay=1&controls=1&mute=1&loop=1&playlist=IeGImzHcjR8&modestbranding=1&rel=0&showinfo=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Learn How to Use
              </span>
              <br />
              <span className="text-foreground">
                Grindax in Minutes
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Watch our quick tutorial to discover how easy it is to build and manage
              your movie collection. Learn all the features and start organizing
              your favorite films today.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TutorialSection