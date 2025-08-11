import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import CommunitySection from '@/components/common/CommunitySection';
import RepositoriesSection from '@/components/common/RepositoriesSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <RepositoriesSection />
      <CommunitySection />
    </main>
  );
}
