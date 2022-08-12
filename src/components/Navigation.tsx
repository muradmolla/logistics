import React, { useState } from 'react'
import { useImageUrl } from '../hooks/useImage';
import { useSectionsQuery } from '../hooks/useSections';

import type { Section } from '../hooks/useSections';

export default function Navigation() {

    const [navActive, setNavActive] = useState(false);
    //TODO: change scrolledNavItem as user scrolls.
    const [scrolledNavItem, setScrolledNavItem] = useState(4);

    const sections = useSectionsQuery();
    
    const navRender = sections.map((section: Section) => {
        const activeClasses = scrolledNavItem === section.key ? ' bg-orange text-blue-dark' : ''; 
        return (
            <li className='py-1 px-5 lg:px-0 lg:pl-[3rem] xl:pl-[4rem] w-60 lg:w-auto text-center'>
            <a href='#' className={'py-2 px-6 lg:px-4 rounded-3xl' + activeClasses}>
                <span>
                {section.label}
                </span>
            </a>
            </li>
            )
    })

    const logoUrl = useImageUrl('Logo.png');
    const navClasses = 'absolute lg:static lg:flex items-center justify-around lg:bg-transparent bg-translucent top-[-2.5rem] right-0 z-10 translate-y-2/4 lg:translate-y-0 py-4'
    const derivedNavClasses = navActive ? navClasses : 'hidden ' + navClasses;
  return (
    <header className='sticky z-10 top-0 py-9 bg-blue-dark'>
        <div className="container mx-auto flex justify-between p-3 sm:p-0">
            <div>
                <img src={logoUrl} alt="logo"/>
            </div>
            <nav className='text-white font-bold flex items-center relative pr-8 lg:pr-0'>
                <ul className={derivedNavClasses}>
                {navRender}
                </ul>
                <div className='lg:hidden' onClick={() => setNavActive(!navActive)}>burger</div>
            </nav>
        </div>
    </header>
  )
}