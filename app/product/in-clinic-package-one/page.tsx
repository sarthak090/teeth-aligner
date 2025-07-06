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
import { getWooCommerceProductById } from '@/actions/woocommerce'


  // const SplineFullBox = dynamic(() => import('@/components/3d/SplineFullBox'), {
//   // ssr: false,
//   loading: () => <div className="w-full h-full bg-gray-100 animate-pulse rounded-lg" />
// });
const Customer = dynamic(() => import('@/components/homepage-06/Customer'),  )
const OurWork = dynamic(() => import('@/components/homepage-07/OurWork'),  )

// export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
//   const product = await getInclinicPackageData()
//   const customData = product.custom_data
//   const seoData = customData.rank_math
//   return {
//     title: seoData.title,
//     description: seoData.description,
//     keywords: seoData.focus_keyword,
//     robots: seoData.robots,
//     canonical: seoData.canonical,
//     openGraph: {
//       title: seoData.title,
//       description: seoData.description,
//       images: [seoData.image],
//       url: seoData.canonical,
//       siteName: seoData.site_name,
//       locale: seoData.locale,
//       type: seoData.type,
//     }

//   }
// }
function ProductDisplay() {
  return (
    <div className="relative h-[90%] w-full">
      <SplineFullBox />
    </div>
  )
}



export default async function InClinicPackageOne() {
  const productData = await getWooCommerceProductById(382)
  if (!productData.success || !productData.product) {
    return <div>Product not found</div>
  }
  const product = productData.product
  
  // Provide proper fallback values for the expected data structures
  const data = product.global_content || { 
    faqs: [],
    customers: [],
    gallery: []
  }

  // Default featured icons structure
  const defaultFeaturedIcons = {
    clear_aligners: { content: 'Custom-made, virtually invisible aligners that gradually straighten your teeth without metal brackets or wires.' },
    digital_scanning: { content: 'Advanced 3D scanning technology for precise digital impressions of your teeth, eliminating messy traditional molds.' },
    treatment_planning: { content: 'Personalized treatment plans with 3D visualization of your expected results before starting the journey.' },
    remote_planning: { content: 'AI-powered progress tracking and virtual check-ins to ensure your treatment stays on track.' }
  }

  // Default whats in the box structure
  const defaultWhatsInTheBox = {
    chewie: { 
      heading: 'Aligner Chewie',
      description: 'Achieve a tighter, more comfortable fit with the AlignersFit™ Aligner Chewie — your go-to tool for getting the most out of your invisible aligners or retainers.'
    },
    retriver: { 
      heading: 'Aligner Retriever',
      description: 'Take the struggle out of removing your aligners with the AlignersFit™ Aligner Retriever — a compact, hygienic tool designed to make taking out your clear aligners or retainers effortless and mess-free.'
    },
    cleaning_foam: { 
      heading: 'Aligner Cleaning Foam',
      description: 'Keep your aligners fresh, clean, and crystal-clear with AlignersFit™ Teeth Aligner Foam Cleaner — your daily companion for a healthier, more hygienic smile.'
    }
  }

  const handleAddToCart = () => {
    try {
      // check if product is in cart
     
      useCartStore.getState().addItem({
        id: product.id.toString(),
        name: product.name,
        price: parseFloat(product.price),
        quantity: 1,
      })
      toast.success('Item added to cart successfully!')
    } catch (error) {
      toast.error('Failed to add item to cart')
    }
  }

  console.log('product', product)

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
                <h1 className="mb-4 text-6xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-xl text-gray-600">Professional teeth alignment treatment with expert supervision</p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-3">
                  {(product as any).regular_price && (product as any).regular_price !== product.price ? (
                    <>
                      <p className="text-4xl font-bold text-green-600">${product.price}</p>
                      <p className="text-2xl font-medium text-gray-400 line-through">${(product as any).regular_price}</p>
                      <span className="px-2 py-1 text-sm font-medium text-white bg-red-500 rounded-md">
                        Save ${(parseFloat((product as any).regular_price) - parseFloat(product.price)).toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <p className="text-4xl font-bold text-gray-900">${product.price}</p>
                  )}
                </div>
                <p className="text-sm text-gray-600">One-time payment or flexible financing available</p>
              </div>
              </div>

              {/* Pricing Section */}

              {/* Product Details Section */}
              <ServicesV11 featured_icons={
                product.acf?.featured_icons && typeof product.acf.featured_icons === 'object' && !Array.isArray(product.acf.featured_icons) 
                  ? product.acf.featured_icons 
                  : defaultFeaturedIcons
              } />

              {/* Enhanced CTA Section */}
              <ProductActions
                productId={product.id.toString()}
                productName={product.name}
                price={parseFloat(product.price)}
              />
            </div>
          </div>

          {/* Conditions We Treat */}
         
        </div>
        <div className="grid grid-cols-1">
          <IntheBoxHorizontalScroll whats_in_the_box={
            product.acf?.whats_in_the_box && typeof product.acf.whats_in_the_box === 'object' && !Array.isArray(product.acf.whats_in_the_box)
              ? product.acf.whats_in_the_box 
              : defaultWhatsInTheBox
          } />
        </div>
        <FaqV1 data={data.faqs || []} />
        {/* <Customer data={data.customers} /> */}
        <OurWork data={data.gallery || []} />
      </div>
    </LayoutOne>
  )
}
