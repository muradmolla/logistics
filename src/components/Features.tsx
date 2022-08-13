import React from 'react';
import { useImageUrl } from '../hooks/useImage';
import { SectionController } from '../hooks/useSections';
import { formatNodes } from '../utility/formatNodes';

export default function Features() {
    const section = "features";

    const content = new SectionController(section);

    const nodes = formatNodes(content, 6);

    const nodesRender = nodes.map((i) => {
        return (
            <div className='flex justify-center'>
        <div className='flex flex-col h-72 w-64 justify-center items-center'>
            <img src={i.img} alt={i.content} />
            <p className='my-5'>{i.content}</p>
        </div>
            </div>
        );
    });

    return (
        <section id={section} className="text-black pt-10">
            <div className='container mx-auto text-center'>
                <div className='my-20'>
                <h2>{content.contentFromPart("header")}</h2>
                <h4>{content.contentFromPart("subText")}</h4>
                </div>
                <div className="grid lg:grid-cols-3">
                    {nodesRender}
                </div>
            </div>
        </section>
    );
}