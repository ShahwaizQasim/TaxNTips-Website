import BusinessTaxBanner from '@/components/businessTax_Banner/tax'
import BusinessTaxContent from '@/components/BusinessTaxContant/taxContent'
import Footer from '@/components/footer/footer'
import Navbar2 from '@/components/navbar2/navbar2'
import { NextPage } from 'next'

interface Props {}

const BusinessTax: NextPage<Props> = ({}) => {
  return <div>
    <Navbar2 />
    <BusinessTaxBanner />
    <BusinessTaxContent />
    <Footer />
  </div>
}

export default BusinessTax