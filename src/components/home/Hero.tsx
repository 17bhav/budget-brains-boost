
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-16 lg:pt-20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-coral-100 text-coral-600 mb-6 animate-fade-in">
            Marketing Consultancy for Startups & Early-Stage Companies
          </span>
          <h1 className="title animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Smart Marketing. <br className="hidden sm:block" />
            <span className="text-coral-500">Scalable Growth.</span>
          </h1>
          <p className="subtitle mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We help you market better without burning your budget.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button asChild size="lg">
              <Link to="/contact" className="text-base">
                Book a Free Audit
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/services" className="text-base flex items-center gap-2">
                Explore Services <ArrowRightIcon size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-16 bg-neutral-100 py-12">
        <div className="container text-center">
          <p className="text-neutral-600 mb-6">Trusted by innovative startups</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="w-32 h-18 flex items-center justify-center">
              <img src="/lovable-uploads/8216d696-de94-4a5e-8ed3-b11a3334d602.png" alt="The Knack" className="max-h-full w-auto" />
            </div>
            <div className="w-36 h-18 flex items-center justify-center">
              <img src="/lovable-uploads/b1374e63-2dca-4290-b104-55720919c1c6.png" alt="Vrindavan Handlooms" className="max-h-full w-auto" />
            </div>
            <div className="w-32 h-18 flex items-center justify-center">
              <img src="/lovable-uploads/cfcaacd1-e119-4500-b9dc-eb6dd70895a6.png" alt="SUKOON" className="max-h-full w-auto" />
            </div>
            <div className="w-32 h-18 flex items-center justify-center">
              <img src="/lovable-uploads/b941cf0b-62d3-404d-beb3-98ce2a95bec9.png" alt="GNH Group" className="max-h-full w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
