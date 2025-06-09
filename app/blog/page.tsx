import BlogPostV5 from '@/components/blogpage/BlogPostV5'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import getMarkDownData from '@/utils/GetMarkDownData'

export const metadata = {
  title: 'AlignersFit Blog',
}

export interface BlogType {
  slug: string
  content: string
  [key: string]: any
}

const loadedBlogs: BlogType[] = getMarkDownData('data/teeth-aligners')

const BlogPage = () => {
  return (
    <LayoutOne>
      <PageHero
        badgeTitle="Blog"
        title="What we got to say"
        italicTitle=""
        description="Stay informed about clear aligners, orthodontic care, and smile transformations. Get expert insights, treatment tips, and success stories from AlignersFit's dental professionals."
      />
      <BlogPostV5 Blogs={loadedBlogs} />
      <CTA>
        Let's discuss
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/aligners/smile1.jpg' },
            { id: '2', img: '/images/aligners/smile2.jpg' },
            { id: '3', img: '/images/aligners/smile3.jpg' },
          ]}
        />
        your smile.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">Book a free consultation?</i>
      </CTA>
    </LayoutOne>
  )
}

export default BlogPage
