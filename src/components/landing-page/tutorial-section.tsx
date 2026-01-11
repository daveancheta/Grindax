import { SignInButton, SignUpButton } from '@clerk/nextjs'
import { Button } from '../ui/button'

function TutorialSection() {
  return (
    <section className="wrapper py-16 sm:py-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 lg:space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Grindax
              </span>
              <br />
              <span className="text-foreground">
                Your Ultimate Movie Collection Manager
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Organize, discover, and enjoy your favorite films with ease. 
              Create your personal movie collection with automatic data enrichment 
              from The Movie Database.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <SignUpButton>
              <Button
                size="lg"
                className="bg-linear-to-r from-yellow-400 to-yellow-600 
                hover:from-yellow-500 hover:to-yellow-700 text-black 
                font-semibold shadow-lg shadow-yellow-500/25 transition-all
                w-full sm:w-auto"
              >
                Get Started
              </Button>
            </SignUpButton>
            <SignInButton>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/10 hover:border-white/30 
                text-foreground font-medium transition-all w-full sm:w-auto"
              >
                Sign In
              </Button>
            </SignInButton>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            <div className="hidden lg:block">
              <img 
                src="/grindax-desktop.png" 
                alt="Grindax Desktop Preview" 
                className="w-full h-auto rounded-lg shadow-2xl border border-white/10"
              />
            </div>
            <div className="lg:hidden flex justify-center">
              <img 
                src="/grindax-mobile.png" 
                alt="Grindax Mobile Preview" 
                className="w-full max-w-xs h-auto rounded-lg shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TutorialSection