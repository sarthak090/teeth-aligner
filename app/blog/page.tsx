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
      
    </LayoutOne>
  )
}

export default BlogPage
