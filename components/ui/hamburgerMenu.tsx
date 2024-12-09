"use client"

import { JSX, useState } from "react"

interface HamburgerMenuInterface {
    isActive: boolean,
}

const HamburgerMenu = (): JSX.Element => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="cursor-pointer" onClick={() => setIsActive(prev => !prev)}>
            <div className='relative w-7 h-7 right-1 -bottom-1'>
                <div className='absolute left-0 border-b-[3px] rounded-full w-7 transition-all' style={{ rotate: isActive ? '45deg' : '0deg', top: isActive ? '12px' : '0px' }} />
                <div className='absolute left-0 top-3 border-b-[3px] rounded-full w-7 transition-all' style={{ rotate: isActive ? '45deg' : '0deg' }} />
                <div className='absolute left-0 top-6 border-b-[3px] rounded-full w-7 transition-all' style={{ rotate: isActive ? '-45deg' : '0deg', top: isActive ? '12px' : '24px' }} />
            </div>
        </div>
    )
}

export default HamburgerMenu