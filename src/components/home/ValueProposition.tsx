
import { CheckIcon, LineChart, TrendingUp, Wallet } from 'lucide-react';

const ValueProposition = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title text-center">Why Budget & Brains?</h2>
        <p className="section-subtitle text-center mx-auto">
          We believe effective marketing doesn't mean expensive marketing. Our approach balances strategic thinking with budget efficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 card-hover">
            <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mb-4">
              <Wallet className="text-coral-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Budget-Focused</h3>
            <p className="text-neutral-600">
              We help you maximize every marketing dollar with lean strategies tailored to your growth stage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 card-hover">
            <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mb-4">
              <LineChart className="text-coral-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data-Driven</h3>
            <p className="text-neutral-600">
              All decisions backed by metrics. We focus on measurable results for continuous improvement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 card-hover">
            <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="text-coral-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Growth-Oriented</h3>
            <p className="text-neutral-600">
              Strategic approaches focused on sustainable growth rather than vanity metrics or temporary gains.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-neutral-50 rounded-xl p-8 border border-neutral-200">
          <h3 className="text-2xl font-semibold mb-6">Key Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <CheckIcon className="text-coral-500" size={20} />
              </div>
              <p>Reduce marketing costs without sacrificing quality</p>
            </div>
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <CheckIcon className="text-coral-500" size={20} />
              </div>
              <p>Access vetted freelancers and agencies at competitive rates</p>
            </div>
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <CheckIcon className="text-coral-500" size={20} />
              </div>
              <p>Focus on channels that actually deliver ROI</p>
            </div>
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <CheckIcon className="text-coral-500" size={20} />
              </div>
              <p>No long-term contracts or hidden fees</p>
            </div>
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <CheckIcon className="text-coral-500" size={20} />
              </div>
              <p>Get personalized attention from seasoned marketers</p>
            </div>
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <CheckIcon className="text-coral-500" size={20} />
              </div>
              <p>Build marketing capabilities that scale with your business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
