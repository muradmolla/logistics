import React from 'react';
import { useImageUrl } from '../hooks/useImage';
import { useSectionsQuery } from '../hooks/useSections';
import Home from './Hero/Home';
import Why from './Hero/Why';

export default function Hero() {

    const section = useSectionsQuery();
    const img = useImageUrl("Path.png");



    return (
        <>
        <div className="bg-blue-dark pt-10 text-orange">
        <Home />
        <div className="relative h-[20vw] translate-y-[-40%]">
            <div className="absolute top-0 z-[-1]">
                <img className="w-[100vw] hidden md:block" src={img} alt="path" />
            </div>
        </div>
        <Why /> 
        </div>
        </>
    );
}