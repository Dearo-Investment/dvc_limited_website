import Hero from "@/components/Hero/Hero";
import Stats from "@/components/Stats/Stats";
import AboutSection from "@/components/About/AboutSection";
import SectorsSection from "@/components/Sectors/SectorsSection";
import ContactSection from "@/components/Contact/ContactSection";
import NewsSection from "@/components/News/NewsSection";


export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <SectorsSection />
      <NewsSection />
      <ContactSection />
    </>
  );
}
