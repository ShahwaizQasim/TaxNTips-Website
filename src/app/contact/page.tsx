import Footer from '@/components/footer/footer'
import Navbar2 from '@/components/navbar2/navbar2'
import { NextPage } from 'next'

interface Props {}

const ContactPage: NextPage<Props> = ({}) => {
  return <div>
    <Navbar2 />
    <h2>Contact Page</h2>
    <Footer />
  </div>
}

export default ContactPage