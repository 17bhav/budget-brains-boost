import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HowWeWork = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Our Approach</h2>
          <p className="section-subtitle mx-auto">
            We focus on data-driven strategies and transparent communication to deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Step 1 */}
          <div className="text-center card-hover">
            <div className="w-16 h-16 mx-auto rounded-full bg-coral-100 text-coral-500 flex items-center justify-center text-2xl font-semibold mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Audit & Analysis</h3>
            <p className="text-neutral-600">
              We start by understanding your current marketing efforts and identifying areas for improvement.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center card-hover">
            <div className="w-16 h-16 mx-auto rounded-full bg-coral-100 text-coral-500 flex items-center justify-center text-2xl font-semibold mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Strategy & Planning</h3>
            <p className="text-neutral-600">
              Next, we develop a customized marketing strategy tailored to your specific goals and budget.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center card-hover">
            <div className="w-16 h-16 mx-auto rounded-full bg-coral-100 text-coral-500 flex items-center justify-center text-2xl font-semibold mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Execution & Optimization</h3>
            <p className="text-neutral-600">
              Finally, we implement the strategy and continuously optimize performance based on data and insights.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-20">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Built by Marketers Tired of Wasted Budgets</h3>
            <p className="text-neutral-600 mb-6">
              We've been there. We've seen the waste. And we've built a better way forward for startups that need smart growth.
            </p>
            <Button asChild>
              <Link to="/about" onClick={scrollToTop}>About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
