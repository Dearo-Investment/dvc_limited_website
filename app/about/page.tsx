import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AboutSection from '@/components/AboutSection';
import Milestones from '@/components/Milestones';
import Awards from '@/components/Awards';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about DVCCL — a disciplined venture capital platform incorporated in 2022, driving sustainable growth across Sri Lanka.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About DVCCL"
        title="A trusted partner in investment and innovation"
        body="Incorporated under the Companies Act No. 07 of 2007 and registered on 1st September 2022, DVCCL empowers businesses and communities across Sri Lanka."
      />
      <AboutSection />
      <Milestones />
      <Awards />
    </>
  );
}
