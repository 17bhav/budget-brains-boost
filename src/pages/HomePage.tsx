
import Hero from '@/components/home/Hero';
import ValueProposition from '@/components/home/ValueProposition';
import Services from '@/components/home/Services';
import HowWeWork from '@/components/home/HowWeWork';
import Testimonials from '@/components/home/Testimonials';
import PricingPreview from '@/components/home/PricingPreview';
import CTASection from '@/components/home/CTASection';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ValueProposition />
      <Services />
      <Testimonials />
      <PricingPreview />
      <HowWeWork />
      <CTASection />
    </main>
  );
};

export default HomePage;
