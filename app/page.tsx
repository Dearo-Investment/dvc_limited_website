import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import AboutSection from '@/components/AboutSection';
import Milestones from '@/components/Milestones';
import Awards from '@/components/Awards';
import SubsidiariesPreview from '@/components/SubsidiariesPreview';
import NewsSection from '@/components/NewsSection';
import LeadershipPreview from '@/components/LeadershipPreview';
import CareersCTA from '@/components/CareersCTA';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutSection />
      <Milestones />
      <Awards />
      <SubsidiariesPreview />
      <NewsSection />
      <LeadershipPreview />
      <CareersCTA />
      <ContactSection />
    </>
  );
}
