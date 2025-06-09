'use client'
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Faqs = () => {
    const faqs = [
        {
            question: "What is AlignersFit?",
            answer: "AlignersFit is a platform that provides affordable and high-quality aligners for orthodontic treatment."
        },
        {
            question: "How does AlignersFit work?",
            answer: "AlignersFit works by providing a platform for users to get affordable and high-quality aligners for orthodontic treatment."
        },
        {
            question: "What Makes Aligners Better Than Traditional Braces?",
            answer: `
            If you're searching for a more convenient and comfortable way to align your teeth, aligners provide several advantages over traditional braces. These removable, transparent trays gently move your teeth into their desired positions, delivering predictable results without metal wires and brackets. 

            Compared to braces, aligners offer faster treatment times, increased comfort, and a discreet appearance. In just six months, you can achieve a beautiful smile while going unnoticed by others.

            AlignersFit allows you to maintain your oral hygiene routine, indulge in your favourite foods and drinks, and prevent dental issues such as decay and gum disease.
            `
        },
        {
            question: "Do You Need A Dental Aligner?",
            answer: `
            Aligners offer a fantastic alternative if you want to straighten your teeth without the inconveniences associated with metal braces. Aligners can address various orthodontic concerns, including crowding, spacing, over-bite, under-bite, cross-bite, and open-bite.

            Aligners can be suitable for those who have previously worn braces but have experienced tooth shifting due to incompatible retainers. However, complex or severe cases may require traditional treatment methods like fixed braces.

            To decide whether aligners suit you, consult an orthodontist who can thoroughly assess your teeth and jaw and recommend the most appropriate action.
            `
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqRefs = useRef<(HTMLDivElement | null)[]>([]);
    const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Create an intersection observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Animate the title when it comes into view
                    if (entry.target.classList.contains('faq-title')) {
                        gsap.from(entry.target, {
                            y: -50,
                            opacity: 0,
                            duration: 1.2,
                            ease: "back.out(1.7)",
                            
                        });
                    }
                    // Animate FAQ items when they come into view
                    if (entry.target.classList.contains('faq-item')) {
                        gsap.from(entry.target, {
                            y: 100,
                            opacity: 0,
                            duration: 1,
                            ease: "elastic.out(1, 0.5)"
                        });
                    }
                    // Unobserve after animation
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2, // Trigger when 20% of the element is visible
            rootMargin: '50px' // Start animation slightly before element comes into view
        });

        // Observe the title
        const titleElement = document.querySelector('.faq-title');
        if (titleElement) {
            observer.observe(titleElement);
        }

        // Observe all FAQ items
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach((item) => {
            observer.observe(item);
        });

        // Cleanup
        return () => {
            observer.disconnect();
        };
    }, []);

    const toggleFaq = (index: number) => {
        const answerElement = answerRefs.current[index];
        const questionElement = faqRefs.current[index];
        const isOpening = openIndex !== index;

        if (isOpening) {
            // Close previously opened answer if any
            if (openIndex !== null && answerRefs.current[openIndex]) {
                gsap.to(answerRefs.current[openIndex], {
                    height: 0,
                    duration: 0.4,
                    ease: "power2.inOut"
                });
            }

            // Animate the question being clicked
            gsap.to(questionElement, {
                scale: 1.02,
                duration: 0.2,
                ease: "power2.out",
                yoyo: true,
                repeat: 1
            });

            // Open new answer with a more dynamic animation
            if (answerElement) {
                gsap.set(answerElement, { height: "auto" });
                gsap.from(answerElement, {
                    height: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    onStart: () => {
                        gsap.from(answerElement.querySelector('p'), {
                            opacity: 0,
                            y: 20,
                            duration: 0.4,
                            delay: 0.2
                        });
                    }
                });
            }
        } else {
            // Close current answer with a smoother animation
            if (answerElement) {
                gsap.to(answerElement, {
                    height: 0,
                    duration: 0.4,
                    ease: "power2.inOut"
                });
            }
        }

        setOpenIndex(isOpening ? index : null);
    };

    return (
        <div ref={containerRef} className="container mx-auto px-4 py-8 md:py-12 my-12 md:my-24">
            <h2 className="text-4xl md:text-6xl leading-tight font-bold mb-8 faq-title text-center md:text-left">
                Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div 
                        key={index}
                        ref={(el) => { faqRefs.current[index] = el; }}
                        className="border-b border-[#0000001A] overflow-hidden transform-gpu faq-item"
                    >
                        <button
                            className="w-full px-4 md:px-6 py-3 md:py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                            onClick={() => toggleFaq(index)}
                        >
                            <span className="font-semibold text-base md:text-lg">{faq.question}</span>
                            <span className="orange-gradient-text transform transition-transform duration-300"
                                  style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                        <div 
                            ref={(el) => { answerRefs.current[index] = el; }}
                            className="overflow-hidden"
                            style={{ height: openIndex === index ? 'auto' : '0' }}
                        >
                            <div className="px-4 md:px-6 py-3 md:py-4 bg-gray-50">
                                <p className="text-sm md:text-base text-gray-600 whitespace-pre-line">{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};