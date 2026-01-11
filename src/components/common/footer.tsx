import Link from 'next/link'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
      <footer className='bg-black/80 backdrop-blur-xl border-t border-white/10 w-full mt-auto'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8 py-16'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
            <div className='space-y-4'>
              <Link 
                href="/" 
                className="flex items-center gap-3 group transition-opacity hover:opacity-80 w-fit"
              >
                <img 
                  className='w-10 h-10 rounded-full' 
                  src="/grindax.png" 
                  alt="Grindax Logo" 
                />
                <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Grindax
                </span>
              </Link>
              <p className='text-muted-foreground text-sm leading-relaxed max-w-xs'>
                Your ultimate movie collection manager. Organize, discover, and enjoy your favorite films with ease.
              </p>
            </div>

            <div className='space-y-4'>
              <h3 className='font-semibold text-white text-sm uppercase tracking-wider'>
                Features
              </h3>
              <ul className='space-y-3'>
                <li className='text-muted-foreground text-sm leading-relaxed'>
                  Organize Collections
                </li>
                <li className='text-muted-foreground text-sm leading-relaxed'>
                  Discover Movies
                </li>
                <li className='text-muted-foreground text-sm leading-relaxed'>
                  Track Favorites
                </li>
              </ul>
            </div>

            <div className='space-y-4'>
              <h3 className='font-semibold text-white text-sm uppercase tracking-wider'>
                Tech Stack
              </h3>
              <ul className='space-y-3'>
                <li>
                  <Link 
                    href="https://nextjs.org/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-muted-foreground hover:text-yellow-400 transition-colors text-sm leading-relaxed inline-block'
                  >
                    Next.js
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://clerk.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-muted-foreground hover:text-yellow-400 transition-colors text-sm leading-relaxed inline-block'
                  >
                    Clerk
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://neon.tech/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-muted-foreground hover:text-yellow-400 transition-colors text-sm leading-relaxed inline-block'
                  >
                    Neon
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://www.prisma.io/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-muted-foreground hover:text-yellow-400 transition-colors text-sm leading-relaxed inline-block'
                  >
                    Prisma
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://www.themoviedb.org/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-muted-foreground hover:text-yellow-400 transition-colors text-sm leading-relaxed inline-block'
                  >
                    Powered by TMDB
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='pt-8 border-t border-white/10'>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
              <p className='text-muted-foreground text-sm'>
                © {currentYear} Grindax. All rights reserved.
              </p>
              <p className='text-muted-foreground/70 text-xs'>
                Developed by Heaven Dave ancheta
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer