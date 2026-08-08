import HeroSection from "../components/about/HeroSection";
import StatsSection from "../components/about/StatsSection";
import StorySection from "../components/about/StorySection";
import FeaturesSection from "../components/about/FeaturesSection";
import HowItWorks from "../components/about/HowItWorks";
import TechStack from "../components/about/TechStack";
import MeetDeveloper from "../components/about/MeetDeveloper";
import Roadmap from "../components/about/Roadmap";
import CTASection from "../components/about/CTASection";

function About() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <StorySection />
      <FeaturesSection />
      <HowItWorks />
      <TechStack />
      <MeetDeveloper />
      <Roadmap />
      <CTASection />
    </>
  );
}

export default About;