
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-coral-500">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to optimize your marketing?</h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss how Budget & Brains can help your startup grow smarter, not more expensively.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
           
            <Button asChild size="lg" className="bg-white text-coral-500 hover:bg-neutral-100">
              <Link to="/contact" onClick={scrollToTop} className="text-base">
                Tell us about your Startup
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
