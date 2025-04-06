
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckIcon, HelpCircle } from 'lucide-react';

const PricingPage = () => {
  return (
    <main>
      <section className="pt-24 pb-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="title">Transparent Pricing</h1>
            <p className="subtitle">
              Clear, flexible options designed to fit startup budgets at any growth stage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* One-time Audit */}
            <div className="bg-white rounded-lg p-8 border border-neutral-200 shadow-sm">
              <h2 className="text-2xl font-semibold mb-2">One-time Audit</h2>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">$1,499</span>
                <span className="text-neutral-600 ml-1">one-time</span>
              </div>
              <p className="text-neutral-600 mb-6">
                Complete assessment of your current marketing efforts with actionable recommendations.
              </p>
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-medium mb-2">What's included:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Comprehensive marketing channel audit</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Budget efficiency analysis & recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Competitive positioning assessment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Detailed written action plan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>1-hour strategy session to review findings</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Timeline:</h3>
                  <p>Delivered within 7 business days</p>
                </div>
              </div>
              <Button asChild className="w-full">
                <Link to="/contact">Book an Audit</Link>
              </Button>
            </div>

            {/* Monthly Advisory */}
            <div className="bg-neutral-900 text-white rounded-lg p-8 border border-neutral-800 shadow-md relative">
              <div className="absolute top-0 right-0 bg-coral-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                MOST POPULAR
              </div>
              <h2 className="text-2xl font-semibold mb-2">Monthly Advisory</h2>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">$2,499</span>
                <span className="text-neutral-400 ml-1">/month</span>
              </div>
              <p className="text-neutral-300 mb-6">
                Ongoing guidance and support to implement and optimize your marketing strategy.
              </p>
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-medium mb-2">What's included:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckIcon className="text-coral-400 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Initial comprehensive marketing audit</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="text-coral-400 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Weekly 1-hour strategy sessions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="text-coral-400 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Marketing plan development & updates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="text-coral-400 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Channel performance tracking & analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="text-coral-400 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Team training & marketing enablement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="text-coral-400 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Access to freelancer & agency network</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="text-coral-400 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Unlimited email & chat support</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Commitment:</h3>
                  <p>3-month minimum, then month-to-month</p>
                </div>
              </div>
              <Button asChild className="w-full bg-white text-black hover:bg-neutral-200">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Custom Projects */}
            <div className="bg-white rounded-lg p-8 border border-neutral-200 shadow-sm">
              <h2 className="text-2xl font-semibold mb-2">Custom Projects</h2>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-neutral-600 ml-1">pricing</span>
              </div>
              <p className="text-neutral-600 mb-6">
                Tailored solutions for specific marketing challenges or initiatives.
              </p>
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-medium mb-2">Example projects:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Go-to-market strategy development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Brand refresh or repositioning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Website conversion optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Content marketing program setup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Marketing team recruitment & training</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Process:</h3>
                  <p>Custom scoping and proposal based on your specific needs</p>
                </div>
              </div>
              <Button asChild variant="secondary" className="w-full">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <HelpCircle className="text-coral-500 mr-2" size={20} />
                  Are there any hidden fees?
                </h3>
                <p className="text-neutral-700 pl-8">
                  No. We believe in complete transparency. The prices listed are what you pay, with no surprise add-ons or hidden costs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <HelpCircle className="text-coral-500 mr-2" size={20} />
                  What if I need to cancel my monthly advisory?
                </h3>
                <p className="text-neutral-700 pl-8">
                  After the initial 3-month commitment, you can cancel anytime with 30 days notice. We don't believe in locking clients into long-term contracts.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <HelpCircle className="text-coral-500 mr-2" size={20} />
                  Do you offer discounts for startups or non-profits?
                </h3>
                <p className="text-neutral-700 pl-8">
                  Yes, we offer special rates for early-stage startups (pre-seed/seed) and registered non-profit organizations. Please mention this when you contact us.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <HelpCircle className="text-coral-500 mr-2" size={20} />
                  What's the process for getting started?
                </h3>
                <p className="text-neutral-700 pl-8">
                  We begin with a free consultation to understand your needs, followed by a proposal outlining the scope, timeline, and costs. Once approved, we can typically get started within a week.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <HelpCircle className="text-coral-500 mr-2" size={20} />
                  How do you measure success?
                </h3>
                <p className="text-neutral-700 pl-8">
                  We establish clear KPIs at the beginning of our engagement based on your business goals. These might include metrics like CAC reduction, conversion rate improvements, or channel-specific performance metrics.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-neutral-50 rounded-lg p-8 border border-neutral-200 max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2">Not sure which option is right for you?</h3>
            <p className="text-neutral-600 mb-6">
              Schedule a free consultation to discuss your specific needs and get a customized recommendation.
            </p>
            <Button asChild>
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;
