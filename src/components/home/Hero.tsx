
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
          <p className="subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
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
            {/* These would be replaced with actual logos */}
            <div className="w-24 h-12 bg-neutral-300/30 rounded flex items-center justify-center text-neutral-500 font-semibold">Logo 1</div>
            <div className="w-24 h-12 bg-neutral-300/30 rounded flex items-center justify-center text-neutral-500 font-semibold">Logo 2</div>
            <div className="w-24 h-12 bg-neutral-300/30 rounded flex items-center justify-center text-neutral-500 font-semibold">Logo 3</div>
            <div className="w-24 h-12 bg-neutral-300/30 rounded flex items-center justify-center text-neutral-500 font-semibold">Logo 4</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
