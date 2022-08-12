import React from 'react';
import { useImageUrl } from '../../hooks/useImage';
import { SectionController } from '../../hooks/useSections';

export default function Home() {

    const content = new SectionController("home");

    const laptopUrl = useImageUrl('Promo Mockup.png')
    return (
        <section id='home' className="bg-blue-dark">
            <div className="container mx-auto flex">
                <div>
                    <h1>{ content.contentFromPart("header") }</h1>
                    <p>{ content.contentFromPart("text") }</p>
                </div>
                <div>
                    <img src={laptopUrl} alt="A Laptop" />
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/9mdQPy26hGM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    );
}