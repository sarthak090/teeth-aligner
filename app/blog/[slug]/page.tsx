import BlogContent from '@/components/blogpage/BlogContent'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'
import { BlogType } from '../page'
import { getBlogBySlug, getBlogs   } from '@/actions/queries'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const blogs: BlogType[] =await getBlogs()

  return blogs.map((post) => ({
    slug: post.slug,
  }))
}

const BlogDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  // const blog = getMarkDownContent('data/teeth-aligners/', slug)
  // const postBlog = blog.data

  const blog = await getBlogBySlug(slug)

  if(blog.length === 0){
    return notFound()
  }

  const postBlog = blog[0]

  
 
  return (
    <LayoutOne>
      <PageHero
        // badgeTitle="Blog Details"
        title={postBlog.title.rendered}
        description={postBlog.acf.subtitle}
        spacing="pt-32 md:pt-44 lg:pt-[200px] pb-10 md:pb-16 lg:pb-[88px] xl:pb-[100px] relative overflow-hidden"
      />
      <BlogContent blog={postBlog} />
      <CTA>
        Let's discuss your smile.
        {/* <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/01.jpg' },
            { id: '3', img: '/images/agent/03.jpg' },
            { id: '2', img: '/images/agent/11.png' },
          ]}
        /> */}
       
        <i className="block font-instrument  italic max-md:inline-block max-sm:pl-2 sm:mt-10">Book a free consultation?</i>
      </CTA>
    </LayoutOne>
  )
}

export default BlogDetails
