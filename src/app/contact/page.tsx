import ContactBannerSection from '@/components/ContactBannerSection/contactbanner'
import Footer from '@/components/footer/footer'
import Navbar2 from '@/components/navbar2/navbar2'
import { NextPage } from 'next'
import BlogContentPage from '@/components/ContactContantPage/content'


interface Props {}

const ContactPage: NextPage<Props> = ({}) => {
  return <div>
    <Navbar2 />
    <ContactBannerSection />
    <BlogContentPage />
    <div className='relative top-[150px]'>
      <Footer />
    </div>
  </div>
}

export default ContactPage