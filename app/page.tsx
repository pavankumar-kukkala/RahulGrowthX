import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features"
import FeaturedCourse from "@/components/featurecourse";
import PopularTopics from "@/components/populartopics";
import LearningLevels from "@/components/learninglevels";
import TrustedBrands from "@/components/trustedbrands";
import Stats from "@/components/stats";
import FAQ from "@/components/faq";
import CTASection from "@/components/ctasection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    <FeaturedCourse />
    <PopularTopics />
    <LearningLevels />
    <TrustedBrands />
    <Stats />
    <FAQ />
    <CTASection />
    <Footer />
    </>
  );
}