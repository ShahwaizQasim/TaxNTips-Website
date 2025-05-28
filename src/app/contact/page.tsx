import ContactBannerSection from '@/components/ContactBannerSection/contactbanner'
import ContactContent from '@/components/contactContent/contact'
import Footer from '@/components/footer/footer'
import Navbar2 from '@/components/navbar2/navbar2'
import { NextPage } from 'next'

interface Props {}

const ContactPage: NextPage<Props> = ({}) => {
  return <div>
    <Navbar2 />
    <ContactBannerSection />
    <ContactContent /> 
    <div className='relative top-[150px]'>
      <Footer />
    </div>
  </div>
}

export default ContactPage