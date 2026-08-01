import PageWrapper from "../components/layout/PageWrapper";

import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";

function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <Hero />

      {/* Statistics */}
      <Stats />

      {/* AI Powered Features */}
      <Features />

      {/* How KrishiSathi Works */}
      <HowItWorks />

      {/* Why Choose KrishiSathi */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials /> 

      {/* Call To Action */}
      <CTA />
    </PageWrapper>
  );
}

export default Home;