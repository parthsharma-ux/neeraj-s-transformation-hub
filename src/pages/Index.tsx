import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TransformationsSection from "@/components/TransformationsSection";
import WhyTrainWithMeSection from "@/components/WhyTrainWithMeSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SocialProofSection from "@/components/SocialProofSection";
import InstagramFeedSection from "@/components/InstagramFeedSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import StickyWhatsAppCTA from "@/components/StickyWhatsAppCTA";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Neeraj Singh Pawar Fitness | Transform Your Body With Discipline</title>
        <meta 
          name="description" 
          content="Online fitness coaching and personal training by Neeraj Singh Pawar. Proven body transformations, personalized programs, and expert guidance. Start your fitness journey today!" 
        />
        <meta name="keywords" content="fitness coach, personal trainer, body transformation, online coaching, gym, workout, muscle building, fat loss, India" />
        <meta property="og:title" content="Neeraj Singh Pawar Fitness | Transform Your Body" />
        <meta property="og:description" content="Online fitness coaching and personal training with proven results. Join 500+ successful transformations." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://neerajsinghpawarfitness.com" />
      </Helmet>
      
      <main className="relative overflow-hidden">
        {/* Noise overlay for entire page */}
        <div className="fixed inset-0 bg-noise pointer-events-none z-0" />
        
        <HeroSection />
        <AboutSection />
        <TransformationsSection />
        <WhyTrainWithMeSection />
        <HowItWorksSection />
        <SocialProofSection />
        <InstagramFeedSection />
        <FAQSection />
        <FooterSection />
        <StickyWhatsAppCTA />
      </main>
    </>
  );
};

export default Index;
