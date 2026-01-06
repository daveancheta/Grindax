import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Clapperboard } from 'lucide-react'

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-3 group transition-opacity hover:opacity-80">
            <div className="size-10 rounded-xl bg-linear-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg shadow-yellow-500/20">
                <Clapperboard className='size-5 text-black'/>
            </div>
            <span className="text-2xl font-bold bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Grindax
            </span>
        </Link>
    )
}

function Header() {
    return (
        <header className='sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10'>
            <div className='max-w-7xl mx-auto px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    <Logo />
                    <div className='flex items-center gap-3'>
                        <SignedOut>
                            <SignInButton>
                                <Button 
                                    variant="outline" 
                                    className="border-white/20 hover:bg-white/10 hover:border-white/30 text-white font-medium transition-all"
                                >
                                    Sign In
                                </Button>
                            </SignInButton>
                            <SignUpButton>
                                <Button 
                                    variant="default"
                                    className="bg-linear-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold shadow-lg shadow-yellow-500/25 transition-all"
                                >
                                    Sign Up
                                </Button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton 
                                appearance={{
                                    elements: {
                                        avatarBox: "w-10 h-10 border-2 border-yellow-500/30 hover:border-yellow-500/50 transition-all"
                                    }
                                }}
                            />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header