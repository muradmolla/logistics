import React, { useState } from 'react'
import { useImageUrl } from '../hooks/useImage';
import { useSections } from '../hooks/useSections';

import type { Section } from '../hooks/useSections';

export default function Navigation() {

    const [navActive, setNavActive] = useState(false);
    //TODO: change scrolledNavItem as user scrolls.
    const [scrolledNavItem, setScrolledNavItem] = useState(4);

    const sections = useSections();
    
    const navRender = sections.map((section: Section) => {
        const activeClasses = scrolledNavItem === section.key ? ' bg-orange' : ''; 
        return (
            <div className='py-1 px-5 lg:px-0 lg:pl-[3rem] xl:pl-[4rem] w-60 lg:w-auto text-center'>
            <a href='#' className={'py-2 px-8 lg:px-4 rounded-3xl' + activeClasses}>
                {section.label}
            </a>
            </div>
            )
    })

    const logoUrl = useImageUrl('Logo.png');
    const navClasses = 'absolute lg:static lg:flex items-center justify-around lg:bg-transparent bg-translucent top-[-2.5rem] right-0 z-10 translate-y-2/4 lg:translate-y-0 py-4'
    const derivedNavClasses = navActive ? navClasses : 'hidden ' + navClasses;
    //ASK: how to solve contact text is closer to the bottom of the div.

  return (
    <div className='fixed w-full py-9'>
        <div className="container mx-auto flex justify-between p-3 sm:p-0">
            <div>
                <img src={logoUrl} />
            </div>
            <div className='text-white font-bold flex items-center relative pr-8 lg:pr-0'>
                <div className={derivedNavClasses}>
                {navRender}
                </div>
                <div className='lg:hidden' onClick={() => setNavActive(!navActive)}>burger</div>
            </div>
            
        </div>
    </div>
  )
}