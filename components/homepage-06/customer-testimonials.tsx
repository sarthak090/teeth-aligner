'use client'
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const testimonials = [
  {
    text: "AlignersFit was the best decision I made for my smile. The aligners were super clear and easy to wear—even during work meetings on Zoom. My teeth look amazing now, and the whole process was so smooth!",
    name: "Sarah",
    age: 32,
    location: "Toronto, ON"
  },
  {
    text: "I was skeptical about at-home aligners, but AlignersFit proved me wrong. The customer service was exceptional, and the results were better than I expected. My confidence has skyrocketed!",
    name: "Michael",
    age: 28,
    location: "Vancouver, BC"
  },
  {
    text: "The convenience of AlignersFit is unmatched. I could straighten my teeth without disrupting my busy schedule. The app made tracking progress so easy, and the results are incredible!",
    name: "Emma",
    age: 25,
    location: "Montreal, QC"
  },
  {
    text: "After years of being self-conscious about my smile, AlignersFit gave me the confidence to show my teeth. The process was painless, and the support team was always there when I needed them.",
    name: "David",
    age: 35,
    location: "Calgary, AB"
  }
];

export default function CustomerTestimonials() {
  const containerRef = useRef(null);
  const testimonialRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const animateTestimonial = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);

    const current = testimonialRef.current;
    const xOffset = direction === 'next' ? -100 : 100;

    // Animate current testimonial out
    gsap.to(current, {
      x: xOffset,
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        // Reset position and update content
        gsap.set(current, { x: -xOffset, opacity: 0 });
        setCurrentIndex((prev) => 
          direction === 'next' 
            ? (prev + 1) % testimonials.length 
            : (prev - 1 + testimonials.length) % testimonials.length
        );

        // Animate new testimonial in
        gsap.to(current, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => setIsAnimating(false)
        });
      }
    });
  };

  const nextTestimonial = () => {
    animateTestimonial('next');
  };

  const prevTestimonial = () => {
    animateTestimonial('prev');
  };

  useGSAP(() => {
    // Animate the gradient background
    gsap.from(".gradient-bg", {
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Animate the heading
    gsap.from(".testimonial-heading", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Initial animation for testimonial content
    gsap.from(".testimonial-content", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    gsap.from(".customer-image-container-left", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.customer-image-container-left',
        start: "top 80%",
      }
    });

    gsap.from(".customer-image-container-right", {  
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.customer-image-container-right',
        start: "top 80%",
      }
    });
 
  }, {dependencies:[containerRef.current]});

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-8 py-4 md:py-8 relative mx-auto container px-4 md:px-0">
        <div className="gradient-bg absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] -z-10 bg-gradient-to-br from-[#FF5900] via-[#FF0004] to-[#FFCB90] opacity-50 blur-3xl"></div>

        <div className="grid grid-cols-1 gap-4 md:gap-8">
            <p className="testimonial-heading text-4xl md:text-7xl font-semibold leading-tight md:leading-20">What our customers are <span className="orange-gradient-text">saying.</span></p>

            <div className="grid grid-cols-1 gap-4 md:gap-8 testimonial-content overflow-hidden">
                <div ref={testimonialRef} className="transform transition-transform">
                    <p className="leading-7 md:leading-10 max-w-md text-lg md:text-xl">{testimonials[currentIndex].text}</p>
                    <div className="flex flex-col leading-6 md:leading-7 font-semibold">
                        <p>— {testimonials[currentIndex].name}, {testimonials[currentIndex].age}</p>
                        <p>{testimonials[currentIndex].location}</p>
                    </div>
                </div>
                <div className="flex gap-4 mt-4">
                    <button 
                        onClick={prevTestimonial}
                        disabled={isAnimating}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        ←
                    </button>
                    <button 
                        onClick={nextTestimonial}
                        disabled={isAnimating}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
        <div className="flex justify-center md:justify-end gap-4 md:gap-8 items-center mt-8 md:mt-0">
            <div className="grid grid-cols-1 gap-4 md:gap-8 customer-image-container-left">
                <Image className="customer-image w-[200px] md:w-[300px] h-auto" src="/images/customer.png" alt="book-an-appointment" width={300} height={400} />
                <Image className="customer-image w-[200px] md:w-[300px] h-auto" src="/images/customer.png" alt="book-an-appointment" width={300} height={400} />
            </div>
            <div className="grid grid-cols-1 translate-y-5 md:translate-y-10 gap-4 md:gap-8 customer-image-container-right">
                <Image className="customer-image w-[200px] md:w-[300px] h-auto" src="/images/customer.png" alt="book-an-appointment" width={300} height={400} />
                <Image className="customer-image w-[200px] md:w-[300px] h-auto" src="/images/customer.png" alt="book-an-appointment" width={300} height={400} />
            </div>
        </div>

        {/* <div className="grid grid-cols-1 gap-4 md:gap-8">
            <p className="text-3xl md:text-7xl font-semibold text-center leading-tight md:leading-20">What our customers are <span className="orange-gradient-text">saying.</span></p>

            <div className="grid grid-cols-3 gap-4 md:gap-8">
              <div className="col-span-2 w-full h-[400px] bg-gray-100 rounded-lg">
<Image src="/b-a-f.png" alt="book-an-appointment" width={300} height={400} className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="col-span-1 p-4 bg-gray-100 rounded-lg grid grid-cols-1 gap-2 md:gap-8">
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-semibold">Our Customer</div>
                 
                  
                </div>
                <p className="text-md">
                  “AlignersFit was the best decision I made for my smile. The aligners were super clear and easy to wear—even during work meetings on Zoom. My teeth look amazing now, and the whole process was so smooth!”
                </p>
                <div className="flex gap-3 items-center">
                  <Image src="/customer.png" alt="book-an-appointment" width={300} height={400} className="w-[80px] h-[80px] rounded-full object-cover" />
                  <div>
                    <p>Jane Doe</p>
                    <p className="text-sm text-gray-500">Toronto, ON</p>
                  </div>
                  
                  </div>
              </div>

            </div>
        </div> */}
    </div>
  );
}