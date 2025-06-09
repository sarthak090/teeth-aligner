import Tube from './in-box/tube';
import Chewie from './in-box/chewie';
import Retriver from './in-box/retriver';
import Box from './in-box/box';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function InTheBox() {
    const containerRef = useRef<HTMLDivElement>(null);
    
    useGSAP(() => {
        const items = gsap.utils.toArray<HTMLElement>('.box-item');
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none reverse"
            }
        });

        items.forEach((item, index) => {
            tl.from(item, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
            
            }, index * 0.2);
        });
        
    }, { scope: containerRef });

    return (
        <div className="w-full py-12" ref={containerRef}>
            <h1 className="md:text-6xl font-bold orange-gradient-text mb-8">What's In The Box</h1>
            <div className="grid grid-cols-2 gap-2 mx-auto">
               
                <div className="box-item">
                    <Chewie />
                </div>
                <div className="box-item">
                    <Retriver />
                </div>
                 <div className="box-item col-span-2">
                    <Tube />
                </div>
                {/* <Box /> */}
            </div>
        </div>
    )
}