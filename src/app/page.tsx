import Navbar from "@/components/navbar/navbar";
import Carousel from "@/components/carousel/carousel";
import HeroSection from "@/components/heroSection/heroSec";
import QuoteSection from "@/components/QuoteSection/quote";
import TaxPartnerSection from "@/components/TaxPartnerSection/taxPartner";
import AwardsCarousel from "@/components/AwardsCarousel/awardcards";
import AccountingFeatures from "@/components/smartAccounting/accounting";
import ChooseTax from "@/components/chooseTax/chooseTax";
import Footer from "@/components/footer/footer";
import TestimonialSection from "@/components/Testimonial/testimonial";
import HomeBlog from "@/components/HomeBlog/homeBlog";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <HeroSection />
      <QuoteSection />
      <TaxPartnerSection />
      <AwardsCarousel />
      <div className="mt-24">
        <AccountingFeatures />
      </div>
      <ChooseTax />
      <HomeBlog />
      <TestimonialSection />
        <Footer />
    </>
  );
}
