import React from 'react';
import { useImageUrl } from '../../hooks/useImage';
import { SectionController } from '../../hooks/useSections';

export default function Home() {
    const section = "home";
    const content = new SectionController(section);

    const laptopUrl = useImageUrl('Promo Mockup.png')
    return (
        <section id={section}>
            <div className="container mx-auto grid-cols-1 grid lg:grid-cols-2 gap-x-20 gap-y-20">
                <div>
                    <h1 className="text-4xl md:text-7xl mb-8">{ content.contentFromPart("header") }</h1>
                    <p className="text-base md:text-2xl text-white">{ content.contentFromPart("text") }</p>
                </div>
                <div>
                    <div className="relative inline-block">
                        <img className="z-10" src={laptopUrl} alt="A Laptop" />
                        <iframe className="absolute z-20 top-0 translate-x-[14%] translate-y-[10%] w-[78%] h-[83%]" width="560" height="315" src={ content.contentFromPart("video")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}