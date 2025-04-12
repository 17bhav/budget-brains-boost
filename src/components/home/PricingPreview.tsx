
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';

const PricingPreview = () => {
  return (
    <section className="section pb-12">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Transparent Pricing</h2>
          <p className="section-subtitle">
            Flexible options designed to fit startup budgets at any stage. No surprises, just clear value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 border border-neutral-200 shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold mb-2">One-time Audit</h3>
            <div className="mt-4 mb-6">
              <span className="text-lg font-medium">Starts from</span><br />
              <span className="text-3xl font-bold text-neutral-600">INR 20,000</span>
            </div>
            <p className="text-neutral-600 mb-6">
              Complete assessment of your current marketing efforts with actionable recommendations.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Comprehensive channel audit</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Budget efficiency analysis</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Detailed action plan</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>1-hour strategy session</span>
              </li>
            </ul>
            <Button asChild className="mt-auto">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          <div className="bg-neutral-900 text-white rounded-lg p-8 border border-neutral-800 shadow-md flex flex-col relative">
            <div className="absolute top-0 right-0 bg-coral-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-semibold mb-2">Monthly Advisory</h3>
            <div className="mt-4 mb-6">
              <span className="text-lg font-medium">Starts from</span><br />
              <span className="text-3xl font-bold text-neutral-400">INR 5,000</span>
            </div>
            <p className="text-neutral-300 mb-6">
              Ongoing guidance and support to implement and optimize your marketing strategy.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckIcon className="text-coral-400 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Initial marketing audit</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-coral-400 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Weekly strategy sessions</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-coral-400 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Channel performance tracking</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-coral-400 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Team training & enablement</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-coral-400 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Access to freelancer network</span>
              </li>
            </ul>
            <Button asChild className="bg-white text-black hover:bg-neutral-200 mt-auto">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg p-8 border border-neutral-200 shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Custom Projects</h3>
            <div className="mt-4 mb-6">
              <span className="text-lg font-medium">Custom</span><br />
              <span className="text-3xl font-bold text-neutral-600">pricing</span>
            </div>
            <p className="text-neutral-600 mb-6">
              Tailored solutions for specific marketing challenges or initiatives.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Project-based scope</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Defined deliverables & timeline</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Specialized expertise</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Flexible payment options</span>
              </li>
            </ul>
            <Button asChild variant="secondary" className="mt-auto">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/pricing" className="text-coral-500 font-medium hover:underline">
            View full pricing details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
