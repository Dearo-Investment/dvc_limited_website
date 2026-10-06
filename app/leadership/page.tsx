import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import LeadershipTeam from '@/components/LeadershipTeam';

export const metadata: Metadata = {
  title: 'Our Leadership',
  description:
    'Meet the leadership team guiding DVCCL’s strategy and governance.',
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Leadership"
        title="The people steering DVCCL"
        body="Strategic leadership and operational excellence guiding Dearo Venture Capital Limited."
      />

      <LeadershipTeam />
    </>
  );
}