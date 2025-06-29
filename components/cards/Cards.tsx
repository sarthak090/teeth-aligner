'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
// import styles from './Cards.module.css'
import './Cards.css'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import RevealWrapper from '../animation/RevealWrapper'

export default function Cards() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    const smoothStep = (p: number): number => p * p * (3 - 2 * p)

    if (window.innerWidth > 1000) {
      // HERO SECTION ANIMATION
      ScrollTrigger.create({
        trigger: '.hero',
        start: 'top top',
        end: '75% top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress

          const heroCardsContainerOpacity = gsap.utils.interpolate(1, 0.5, smoothStep(progress))
          gsap.set('.hero-cards', { opacity: heroCardsContainerOpacity })

          const heroCardIds = ['#hero-card-1', '#hero-card-2', '#hero-card-3']
          heroCardIds.forEach((cardId: string, index: number) => {
            const delay = index * 0.9
            const cardProgress = gsap.utils.clamp(0, 1, (progress - delay * 0.1) / (1 - delay * 0.1))

            const y = gsap.utils.interpolate('0%', '350%', smoothStep(cardProgress))
            const scale = gsap.utils.interpolate(1, 0.75, smoothStep(cardProgress))

            let x = '0%'
            let rotation = 0
            if (index === 0) {
              x = gsap.utils.interpolate('0%', '90%', smoothStep(cardProgress))
              rotation = gsap.utils.interpolate(0, -15, smoothStep(cardProgress))
            } else if (index === 2) {
              x = gsap.utils.interpolate('0%', '-90%', smoothStep(cardProgress))
              rotation = gsap.utils.interpolate(0, 15, smoothStep(cardProgress))
            }

            gsap.set(cardId, { y, x, scale, rotation })
          })
        },
      })

      // PIN SERVICES
      ScrollTrigger.create({
        trigger: '.services',
        start: 'top top',
        end: `+=${window.innerHeight * 4}px`,
        pin: '.services',
        pinSpacing: true,
      })

      ScrollTrigger.create({
        trigger: '.services',
        start: 'top top',
        end: `+=${window.innerHeight * 4}px`,
        onLeave: () => {
          const servicesSection = document.querySelector('.services')
          if (servicesSection) {
            const top = window.pageYOffset + servicesSection.getBoundingClientRect().top
            gsap.set('.cards', {
              position: 'absolute',
              top,
              left: 0,
              width: '100vw',
              height: '100vh',
            })
          }
        },
        onEnterBack: () => {
          gsap.set('.cards', {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
          })
        },
      })

      // CARD FLIP EFFECT
      ScrollTrigger.create({
        trigger: '.services',
        start: 'top bottom',
        end: `+=${window.innerHeight * 4}`,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress

          const headerProgress = gsap.utils.clamp(0, 1, progress / 0.9)
          const headerY = gsap.utils.interpolate('400%', '0%', smoothStep(headerProgress))
          gsap.set('.services-header', { y: headerY })

          const cardIds = ['#card-1', '#card-2', '#card-3']
          cardIds.forEach((cardId: string, index: number) => {
            const delay = index * 0.5
            const cardProgress = gsap.utils.clamp(0, 1, (progress - delay * 0.1) / (0.9 - delay * 0.1))
            const innerCard = document.querySelector(`${cardId} .flip-card-inner`)

            // Y Movement
            let y: string
            if (cardProgress < 0.4) {
              const np = cardProgress / 0.4
              y = gsap.utils.interpolate('-100%', '50%', smoothStep(np))
            } else if (cardProgress < 0.6) {
              const np = (cardProgress - 0.4) / 0.2
              y = gsap.utils.interpolate('50%', '0%', smoothStep(np))
            } else y = '0%'

            // Scale
            let scale: number
            if (cardProgress < 0.4) {
              const np = cardProgress / 0.4
              scale = gsap.utils.interpolate(0.25, 0.75, smoothStep(np))
            } else if (cardProgress < 0.6) {
              const np = (cardProgress - 0.4) / 0.2
              scale = gsap.utils.interpolate(0.75, 1, smoothStep(np))
            } else scale = 1

            // Opacity
            let opacity = cardProgress < 0.2 ? smoothStep(cardProgress / 0.2) : 1

            // X, Rotate, RotationY
            let x: string, rotate: number, rotationY: number
            if (cardProgress < 0.6) {
              x = index === 0 ? '100%' : index === 1 ? '0%' : '-100%'
              rotate = index === 0 ? -5 : index === 1 ? 0 : 5
              rotationY = 0
            } else if (cardProgress < 1) {
              const np = (cardProgress - 0.6) / 0.4
              x = gsap.utils.interpolate(index === 0 ? '100%' : index === 1 ? '0%' : '-100%', '0%', smoothStep(np))
              rotate = gsap.utils.interpolate(index === 0 ? -5 : index === 1 ? 0 : 5, 0, smoothStep(np))
              rotationY = smoothStep(np) * 180
            } else {
              x = '0%'
              rotate = 0
              rotationY = 180
            }

            gsap.set(cardId, { opacity, y, x, rotate, scale })
            if (innerCard) {
              gsap.set(innerCard, { rotationY })
            }
          })
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className='cardPage'>
      {/* Test div to verify Tailwind is working */}
      
      
      <nav>
          {/* <div className="logo">
            <span>Site Logo</span>
          </div>
          <div className="menu-btn">
            <span>Menu</span>
          </div> */}
      </nav>

      <section className="hero hidden">
        <div className="hero-cards">
          <div className="card" id="hero-card-1">
            <div className="card-title">
              <span>Book a Call</span>
              <span>01</span>
            </div>
            <div className="card-title">
              <span>01</span>
              <span>Book a Call</span>
            </div>
          </div>

          <div className="card" id="hero-card-2">
            <div className="card-title">
              <span>Design</span>
              <span>02</span>
            </div>
            <div className="card-title">
              <span>02</span>
              <span>Design</span>
            </div>
          </div>

          <div className="card" id="hero-card-3">
            <div className="card-title">
              <span>Develop</span>
              <span>03</span>
            </div>
            <div className="card-title">
              <span>03</span>
              <span>Develop</span>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="about hidden">
        <h1 className='text-7xl leading-10'>Keep scrolling — it gets good</h1>
      </section> */}

      <section className="services">
      

        <div className="mobile-cards">
          <div className="cards-container">
            <div className="card" id="mobile-card-1">
              <div className="card-wrapper">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="card-title">
                      <span>Book a Call</span>
                      <span>01</span>
                    </div>
                    <div className="card-title">
                      <span>01</span>
                      <span>Book a Call</span>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="card-title">
                      <span>Book a Call</span>
                      <span>01</span>
                    </div>
                    <div className="card-copy">
                      <p>Discovery</p>
                      <p>Audit</p>
                      <p>User Flow</p>
                      <p>Site Map</p>
                      <p>Personas</p>
                      <p>Strategy</p>
                    </div>
                    <div className="card-title">
                      <span>01</span>
                      <span>Book a Call</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" id="mobile-card-2">
              <div className="card-wrapper">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="card-title">
                      <span>Design</span>
                      <span>02</span>
                    </div>
                    <div className="card-title">
                      <span>02</span>
                      <span>Design</span>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="card-title">
                      <span>Design</span>
                      <span>02</span>
                    </div>
                    <div className="card-copy">
                      <p>Wireframes</p>
                      <p>UI Kits</p>
                      <p>Prototypes</p>
                      <p>Visual Style</p>
                      <p>Interaction</p>
                      <p>Design QA</p>
                    </div>
                    <div className="card-title">
                      <span>02</span>
                      <span>Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" id="mobile-card-3">
              <div className="card-wrapper">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="card-title">
                      <span>Develop</span>
                      <span>03</span>
                    </div>
                    <div className="card-title">
                      <span>03</span>
                      <span>Develop</span>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="card-title">
                      <span>Develop</span>
                      <span>03</span>
                    </div>
                    <div className="card-copy">
                      <p>HTML/CSS/JS</p>
                      <p>CMS Build</p>
                      <p>GSAP Motion</p>
                      <p>Responsive</p>
                      <p>Optimization</p>
                      <p>Launch</p>
                    </div>
                    <div className="card-title">
                      <span>03</span>
                      <span>Develop</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      <section className="cards mt-20">
        <div className="cards-container">
          <div className="card" id="card-1">
            <div className="card-wrapper">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card-title">
                    <span>Book a Call</span>
                    <span>01</span>
                  </div>
                   
                  <div className="card-title">
                    <span>01</span>
                    <span>Book a Call</span>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-title">
                    <span>Book a Call</span>
                    <span>01</span>
                  </div>
                  <div className="card-copy">
                    <p  className='text-2xl'>Choose a date and time to book a discovery session, during which we’ll define the project objectives, timeline, and budget.</p>
                  </div>
                  <div className="card-title">
                    <span>01</span>
                    <span>Book a Call</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card" id="card-2">
            <div className="card-wrapper">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card-title">
                    <span>Receive an Offer</span>
                    <span>02</span>
                  </div>
                  <div className="card-title">
                    <span>02</span>
                    <span>Receive an Offer</span>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-title">
                    <span>Receive an Offer</span>
                    <span>02</span>
                  </div>
                  <div className="card-copy">
                    <p  className='text-2xl'>We’ll send you a bespoke project proposal including deliverables, project roadmap, and a quote in 1-2 business days.</p>
                  </div>
                  <div className="card-title">
                    <span>02</span>
                    <span>Receive an Offer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card " id="card-3">
            <div className="card-wrapper " >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card-title">
                    <span>Kickoff the Project</span>
                    <span>03</span>
                  </div>
                  <div className="card-title">
                    <span>03</span>
                    <span>Kickoff the Project</span>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-title">
                    <span>Kickoff the Project</span>
                    <span>03</span>
                  </div>
                  <div className="card-copy ">
                    <p className='text-2xl'>Sign the contract, send the deposit, lean back, and let us do our thing. We’ll invite you to a design review meeting in 5-7 business days.</p>
                  </div>
                  <div className="card-title">
                    <span>03</span>
                    <span>Kickoff the Project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
 
        </div>
      </section>

      {/* <section className="outro">
        <h1 className='text-7xl leading-10'>The story's not over yet</h1>
      </section> */}
    </div>
  )
}
