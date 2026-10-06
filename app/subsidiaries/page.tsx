import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SubsidiariesList from '@/components/SubsidiariesList';

export const metadata: Metadata = {
  title: 'Our Subsidiaries',
  description:
    "Explore DVCCL's diversified subsidiaries across agriculture, engineering, education, lime production, seafood, and IT solutions.",
};

export default function SubsidiariesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Subsidiaries"
        title="Driving growth through diversified and strategic business ventures"
      />
      <SubsidiariesList />
    </>
  );
}
