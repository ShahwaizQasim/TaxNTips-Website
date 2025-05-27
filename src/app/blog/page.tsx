import BlogBannerSection from '@/components/BlogBannerSection/blogBanner'
import BlogContentPage from '@/components/BlogContantPage/content'
import Footer from '@/components/footer/footer'
import Navbar2 from '@/components/navbar2/navbar2'
import { NextPage } from 'next'

interface Props {}

const BlogPage: NextPage<Props> = ({}) => {
  return <div>
    <Navbar2 />
    <BlogBannerSection/> 
    <BlogContentPage />
    <Footer />
  </div>
}

export default BlogPage