import footerData from '@/data/footer.json'
import arrowIcon from '@/public/images/icons/arrow-Icon.svg'
import logo from '@/public/images/logo-dark.png'
import Image from 'next/image'
import Link from 'next/link'
import FooterProvider from './FooterProvider'

import VisaIcon from '../icons/visa-icon'
import AmericanExpressIcon from '../icons/amex-icon'
import DiscoverIcon from '../icons/discover-icons'
import ApplePayIcon from '../icons/applepay-icon'
import GooglePayIcon from '../icons/gpay-icon'
import AmazonIcon from '../icons/amazon-icon'
import MastercardIcon from '../icons/mastercard-icons'
import PaypalIcon from '../icons/paypal-icon'
import DinersIcon from '../icons/diner-club'
import ShopPayIcon from '../icons/shoppay-icon'

const Footer = () => {
  const paymentMethods = [
    {
      name: 'Visa',
      icon: VisaIcon,
    },
    {
      name: 'Mastercard',
      icon: MastercardIcon,
    },
    {
      name: 'American Express',
      icon: AmericanExpressIcon,
    },
    {
      name: 'Discover',
      icon: DiscoverIcon,
    },
    {
      name: 'PayPal',
      icon: PaypalIcon,
    },
    {
      name: 'Apple Pay',
      icon: ApplePayIcon,
    },
    {
      name: 'Google Pay',
      icon: GooglePayIcon,
    },
    {
      name: 'Amazon Pay',
      icon: AmazonIcon,
    },
    {
      name: 'Diners Club',
      icon: DinersIcon,
    },
    {
      name: 'Shop Pay',
      icon: ShopPayIcon,
    },
  ]
  return (
    <FooterProvider>
      <div className="container">
        <div className="relative z-10 flex flex-col flex-wrap justify-center gap-y-10 sm:flex-row sm:justify-between sm:gap-y-16">
          <div className="pr-8 max-lg:basis-full">
            <h5 className="mb-4 font-satoshi text-sm font-bold uppercase tracking-[3px] text-white sm:mb-8">
              Reach Us
            </h5>
            <p className="mb-5 text-sm text-white">
              Book a free consultation with our dental experts to discuss <br />
              your smile transformation journey
            </p>
            <div className="group flex max-w-[360px] items-center justify-between gap-4  bg-opacity-30 p-4 backdrop-blur-2xl">
              <Image className="h-[155px] w-auto" src={logo} alt="logo" />
            </div>
          </div>

          {footerData.map((section, index) => (
            <div key={`Id_${index}`}>
              <h5 className="mb-4 font-satoshi text-sm font-bold uppercase tracking-[3px] text-white sm:mb-8">
                {section.title}
              </h5>
              <ul>
                {section.links.map(({ href, label }) => (
                  <li className="mb-4" key={href}>
                    <Link
                      href={href}
                      className="block text-white transition-colors duration-300 hover:font-medium hover:text-primary">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 w-full  ">
        <div className="flex justify-between gap-4 px-10 !py-4 container mx-auto">
          <div className="flex flex-col gap-4">
            <small className="text-md font-semibold text-white">
              Copyright © 2025,{' '}
              <Link href="/" className='text-white' title="">
                AlignersFit
              </Link>
              . All rights reserved.
            </small>
          </div>
          <div className="flex gap-4">
            <VisaIcon />
            <MastercardIcon />
            <AmericanExpressIcon />
            <DiscoverIcon />
            <PaypalIcon />
            <ApplePayIcon />
            <GooglePayIcon />
            <AmazonIcon />
            <DinersIcon />
            <ShopPayIcon />
          </div>
        </div>
      </div>
    </FooterProvider>
  )
}

export default Footer
