import HamburgerMenu from '@/components/ui/hamburgerMenu'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='px-4 md:px-10 py-4 border-b border-b-stone-800'>
            <nav className='grid grid-cols-9 justify-between items-center'>
                <div className='col-span-3'>
                    <Link className='font-semibold text-2xl' href="/">Psychora</Link>
                </div>

                <div className='hidden md:flex col-span-3 gap-10 md:gap-20 justify-center'>
                    <Link className='hover:scale-[1.03] transition-all' href="/">Home</Link>
                    <Link className='hover:scale-[1.03] transition-all' href="/about">About</Link>
                    <Link className='hover:scale-[1.03] transition-all' href="questions">Start Test</Link>
                </div>

                <div className='flex md:hidden col-span-6 justify-end'>
                    <div>
                        <HamburgerMenu />
                    </div>
                </div>

                <div className='col-span-3'></div>
            </nav>
        </div>
    )
}

export default Navbar