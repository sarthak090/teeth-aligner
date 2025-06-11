import ConditionsCarousel from '@/components/conditions-carousel'
import ImageMarque from '@/components/homepage-04/ImageMarque'
import TestimonialV5 from '@/components/homepage-04/TestimonialV5'

import SplineFullBox from '@/components/homepage-06/3d/SplineFullBox'
import InTheBox from '@/components/in-the-box'
import LayoutOne from '@/components/shared/LayoutOne'
import TreatmentProcess from '@/components/treatment-process'
import IntheBoxHorizontalScroll from '@/components/homepage-06/SolutionV3'
import RevealWrapper from '@/components/animation/RevealWrapper'
import ServicesV11 from '@/components/homepage-06/ServicesV11'
import FaqV1 from '@/components/shared/FAQ'
import dynamic from 'next/dynamic'
import {   getInclinicPackageData } from '@/actions/queries'
import { useCartStore } from '@/store/cartStore'
import { toast } from 'sonner'
import { Toaster } from 'sonner'
import ProductActions from '@/components/ProductActions'


  // const SplineFullBox = dynamic(() => import('@/components/3d/SplineFullBox'), {
//   // ssr: false,
//   loading: () => <div className="w-full h-full bg-gray-100 animate-pulse rounded-lg" />
// });
const Customer = dynamic(() => import('@/components/homepage-06/Customer'),  )
const OurWork = dynamic(() => import('@/components/homepage-07/OurWork'),  )

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const product = await getInclinicPackageData()
  const customData = product.custom_data
  const seoData = customData.rank_math
  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.focus_keyword,
    robots: seoData.robots,
    canonical: seoData.canonical,
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      images: [seoData.image],
      url: seoData.canonical,
      siteName: seoData.site_name,
      locale: seoData.locale,
      type: seoData.type,
    }

  }
}
function ProductDisplay() {
  return (
    <div className="relative h-[90%] w-full">
      <SplineFullBox />
    </div>
  )
}



export default async function InClinicPackageOne() {
  const product = await getInclinicPackageData()
  const data = product.global_content
  // console.log()

  const handleAddToCart = () => {
    try {
      useCartStore.getState().addItem({
        id: product.id,
        name: product.acf.product_name,
        price: product.acf.pricing,
        quantity: 1,
      })
      toast.success('Item added to cart successfully!')
    } catch (error) {
      toast.error('Failed to add item to cart')
    }
  }

  return (
    <LayoutOne>
      <Toaster position="top-right" />
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
              <ProductActions
                productId={product.id}
                productName={product.acf.product_name}
                price={product.acf.pricing}
              />
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
