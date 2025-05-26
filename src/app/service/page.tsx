import Footer from '@/components/footer/footer'
import Navbar2 from '@/components/navbar2/navbar2'
import { NextPage } from 'next'

interface Props {}

const ServicePage: NextPage<Props> = ({}) => {
  return <div>
    <Navbar2 />
    <h2>Service Page</h2>
    <Footer />
  </div>
}

export default ServicePage