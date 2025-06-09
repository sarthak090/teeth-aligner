
import ConditionsCarousel from '@/components/conditions-carousel'
import ImageMarque from '@/components/homepage-04/ImageMarque'
import TestimonialV5 from '@/components/homepage-04/TestimonialV5'

import SplineFullBox from '@/components/homepage-06/3d/SplineFullBox'
import InTheBox from '@/components/in-the-box'
import LayoutOne from '@/components/shared/LayoutOne'
import TreatmentProcess from '@/components/treatment-process'
import IntheBoxHorizontalScroll from '@/components/homepage-06/SolutionV3'
import RevealWrapper from '@/components/animation/RevealWrapper'
import Link from 'next/link'
import ServicesV11 from '@/components/homepage-06/ServicesV11'
import FaqV2 from '@/components/shared/FaqV2'
import FaqV1 from '@/components/shared/FAQ'
import dynamic from 'next/dynamic'
import { getGlobalData, getInclinicPackageData } from '@/actions/queries'


  // const SplineFullBox = dynamic(() => import('@/components/3d/SplineFullBox'), {
//   // ssr: false,
//   loading: () => <div className="w-full h-full bg-gray-100 animate-pulse rounded-lg" />
// });
const Customer = dynamic(() => import('@/components/homepage-06/Customer'),  )
const OurWork = dynamic(() => import('@/components/homepage-07/OurWork'),  )

function ProductDisplay() {
  return (
    <div className="relative h-[90%] w-full">
      <SplineFullBox />
    </div>
  )
}

export default async function InClinicPackageOne() {
  const data = await getGlobalData()
  const product = await getInclinicPackageData()

  return (
    <LayoutOne>
      <div className=" ">
        <div className="mx-auto max-w-7xl px-4 py-24">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Left Side - 3D Product Display */}
            <div className="">
              <ProductDisplay />
            </div>

            {/* Right Side - Product Details */}
            <div className="space-y-8">
              <div>
                <h1 className="mb-4 text-6xl font-bold text-gray-900">{product.acf.product_name}</h1>
                <p className="text-xl text-gray-600">Professional teeth alignment treatment with expert supervision</p>
              <div className="mt-6 flex gap-2 items-center">
                <p className="text-4xl font-bold">${product.acf.pricing}</p>
                <p className="mt-2 text-sm text-gray-900">One-time payment or flexible financing available</p>
              </div>
              </div>

              {/* Pricing Section */}

              {/* Product Details Section */}
              <ServicesV11 featured_icons={product.acf.featured_icons} />

              {/* Enhanced CTA Section */}
              <RevealWrapper className="reveal-me mt-7 md:mt-14">
                <Link href="/contact" className="rv-button rv-button-secondary mt-10 w-full">
                  <div className="rv-button-top !w-full !text-center">
                    <span className="!font-normal">Buy Now</span>
                  </div>
                  <div className="rv-button-bottom !w-full !text-center">
                    <span className="!font-normal">Buy Now</span>
                  </div>
                </Link>
              </RevealWrapper>
            </div>
          </div>

          {/* Conditions We Treat */}
         
        </div>
        <div className="grid grid-cols-1">
          <IntheBoxHorizontalScroll whats_in_the_box={product.acf.whats_in_the_box} />
        </div>
        <FaqV1 data={data.faqs} />
        {/* <Customer data={data.customers} /> */}
        <OurWork data={data.gallery} />
      </div>
    </LayoutOne>
  )
}
