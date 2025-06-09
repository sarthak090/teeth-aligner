import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function TreatmentProcess() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        const steps = gsap.utils.toArray<HTMLElement>('.step');
        
        // Animate each step
        steps.forEach((step) => {
            gsap.from(step, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: step,
                    start: 'top bottom-=100',
                    toggleActions: 'play none none reverse'
                }
            });
        });
    }, []);

    return (
        <div ref={containerRef} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <h3 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                    Treatment Process
                </h3>
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="step bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 text-white flex items-center justify-center font-bold text-xl mb-4">1</div>
                        <h4 className="text-2xl font-semibold mb-3">Initial Consultation</h4>
                        <p className="text-gray-600 leading-relaxed">Comprehensive dental examination and treatment planning with our expert orthodontists</p>
                    </div>
                    
                    <div className="step bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 text-white flex items-center justify-center font-bold text-xl mb-4">2</div>
                        <h4 className="text-2xl font-semibold mb-3">Custom Aligners</h4>
                        <p className="text-gray-600 leading-relaxed">Receive your custom-made aligners within 2 weeks, designed specifically for your smile</p>
                    </div>
                    
                    <div className="step bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 text-white flex items-center justify-center font-bold text-xl mb-4">3</div>
                        <h4 className="text-2xl font-semibold mb-3">Regular Check-ups</h4>
                        <p className="text-gray-600 leading-relaxed">Monthly progress monitoring with our experts to ensure optimal results</p>
                    </div>
                </div>
            </div>
        </div>
    );
}