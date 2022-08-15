 import React from "react"
import { SectionController } from "../hooks/useSections";

 export default function Contact() {
    const section = "contact";

    const content = new SectionController(section);

    return (
        <section id={section} className="bg-blue text-orange py-16">
            <div className="container mx-auto">
            <h2 className="text-center">{ content.contentFromPart("header") }</h2>
            <div className="grid grid-col-1 lg:grid-cols-2 gap-20 lg:gap-10">
                <div className="pr-3">
                    <h1>{ content.contentFromPart("leftHeader") }</h1>
                    <p className="text-white">{ content.contentFromPart("leftSubtext") }</p>
                    </div>
                <div>
                    <h4 className="text-center">{ content.contentFromPart("FormHeader") }</h4>
                    <form  name="contact" method="POST" data-netlify="true" className="contact-form">
                        <div>
                        <input className="bg-blue-dark" aria-label={ content.contentFromPart("formFullname" )} id="formName" type="text" name="Fullname" placeholder={ content.contentFromPart("formFullname" )}/>
                        </div>
                        <div>
                        <input aria-label={ content.contentFromPart("formEmail" )} type="text" name="Email" placeholder={ content.contentFromPart("formEmail" )}/>
                        </div>
                        <div>
                            <label htmlFor="formName" className="mx-4">{ content.contentFromPart("formTextarea") }</label>
                        <textarea id="formContent" name="content"></textarea>
                        </div> 
                        <div className="flex justify-center">
                        <button className="px-10 py-2 rounded-3xl bg-orange text-blue-dark">{ content.contentFromPart("formSend")}</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </section> 
    );
 }