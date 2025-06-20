import RevealWrapper from '../animation/RevealWrapper'
import { FC } from 'react'

const ContactInfo: FC = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        <RevealWrapper className="mx-auto max-w-[800px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Email Section */}
            <div className="rounded-lg border p-6 transition-all hover:border-primary dark:border-dark">
              <h3 className="mb-4 text-2xl font-normal leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
                Email Us
              </h3>
              <a
                href="mailto:contact@alignersfit.com"
                className="text-xl leading-[1.4] tracking-[0.4px] text-colorText hover:text-primary dark:text-backgroundBody">
                contact@alignersfit.com
              </a>
            </div>

            {/* Phone Section */}
            <div className="rounded-lg border p-6 transition-all hover:border-primary dark:border-dark">
              <h3 className="mb-4 text-2xl font-normal leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
                Call Us
              </h3>
              <a
                href="tel:+1234567890"
                className="text-xl leading-[1.4] tracking-[0.4px] text-colorText hover:text-primary dark:text-backgroundBody">
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ContactInfo
