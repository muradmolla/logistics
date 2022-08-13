import React from 'react'
import { useImageUrl } from '../hooks/useImage';
import { SectionController } from '../hooks/useSections'
import { formatNodes } from '../utility/formatNodes';

export default function Product() {
    const section = "product";

    const content = new SectionController(section);

    const banner = useImageUrl(content.contentFromPart("bannerImg"));

    const nodes = formatNodes(content, 3);

    const ovalImg = useImageUrl("Oval Copy 3.png");
    
    const renderNodes = nodes.map((i) => {
        return (
            <div className='flex py-3'>
                <div className='pr-7'><img src={ovalImg} className="w-9 max-w-none"/></div>
                <h4>{i.content}</h4>
            </div>
        )
    })

    return (
    <section id={section} className="bg-blue-dark py-12">
        <div className="container mx-auto text-orange">
            <h2 className='text-center'>{ content.contentFromPart("header") }</h2>
            <p className='text-center text-white'>{ content.contentFromPart("subText") }</p>
            <div className='lg:grid lg:grid-cols-3 my-6 justify-center'>
                <div className="col-span-2"><img src={banner}/></div>
                <div className='flex flex-col justify-center mx-auto'>
                    {renderNodes}
                </div>
            </div>
        </div>
    </section>
  )
}