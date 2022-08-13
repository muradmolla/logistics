import { useEffect, useState } from "react";

//This value should be bigger than scroll-margin-top property of sections in the page.
const __SCROLL_MARGIN_TOP = 160;

export default function useCurrentSection(): string | void {
    const [currentSection, setCurrentSection] = useState("");

    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        let lastSection = '';
        let maxOffsetTop = 0;
    
        for (let i = 0; i < sections.length; i++) {
            const el = sections[i];
            if (!el) return;
            if (el && el.offsetTop - __SCROLL_MARGIN_TOP -1 <= window.scrollY && el.offsetTop > maxOffsetTop) {
                lastSection = el.id;
                maxOffsetTop = el.offsetTop;
            }
        } 
        setCurrentSection(lastSection);
    })

    return currentSection;
}

function useEvent(event: any, handler: any, passive = false) {
    useEffect(() => {
      // initiate the event handler
      window.addEventListener(event, handler, passive)
  
      // this will clean up the event every time the component is re-rendered
      return function cleanup() {
        window.removeEventListener(event, handler)
      }
    })
  }