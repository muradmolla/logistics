import React from 'react';
import { useImageUrl } from '../../hooks/useImage';
import { SectionController } from '../../hooks/useSections';

export default function Why() {
    const section = "why";

    const content = new SectionController(section);
    const logo = useImageUrl(content.contentFromPart("headerImg"));

    const nodes = [
        {text: content.contentFromPart("node1"), img: useImageUrl(content.contentFromPart("node1Img"))},
        {text: content.contentFromPart("node2"), img: useImageUrl(content.contentFromPart("node2Img"))},
        {text: content.contentFromPart("node3"), img: useImageUrl(content.contentFromPart("node3Img"))},
    ];
    return (
        <section id={section} className="pb-20">
            <div className="container mx-auto w-full">
                <h2 className="text-orange text-center py-20">{ content.contentFromPart("header")} <img className="inline-block" src={logo} alt="logo" /></h2>
                    <div className="flex justify-around flex-wrap">
                        <div className='text-center py-3 w-full md:w-auto'>
                            <img className='my-5 mx-auto' src={nodes[0].img} alt={ nodes[0].text }/>
                            <h4>{ nodes[0].text }</h4>
                        </div>
                        <div className='text-center py-3 w-full md:w-auto'>
                            <img className='my-5 mx-auto' src={nodes[1].img} alt={ nodes[1].text }/>
                            <h4>{ nodes[1].text }</h4>
                        </div>
                        <div className='text-center py-3 w-full md:w-auto'>
                            <img className='my-5 mx-auto' src={nodes[2].img} alt={ nodes[2].text }/>
                            <h4>{ nodes[2].text }</h4>
                        </div>
                    </div>
            </div>
            
        </section>
    );
}