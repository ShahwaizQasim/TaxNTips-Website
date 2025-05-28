import Navbar from "@/components/navbar/navbar";
import Carousel from "@/components/carousel/carousel";
import HeroSection from "@/components/heroSection/heroSec";
import QuoteSection from "@/components/QuoteSection/quote";
import TaxPartnerSection from "@/components/TaxPartnerSection/taxPartner";
import AwardsCarousel from "@/components/AwardsCarousel/awardcards";
import AccountingFeatures from "@/components/smartAccounting/accounting";
import ChooseTax from "@/components/chooseTax/chooseTax";
import Footer from "@/components/footer/footer";
import BlogSection from "@/components/blogsSection/blogs";
import TestimonialSection from "@/components/Testimonial/testimonial";

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
      <BlogSection />
      <TestimonialSection />
      <Footer />
    </>
  );
}
