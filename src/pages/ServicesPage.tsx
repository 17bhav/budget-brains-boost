
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileSearch, PenTool, Users, CheckIcon, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  return (
    <main>
      <section className="pt-24 pb-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="title">Our Services</h1>
            <p className="subtitle">
              Strategic marketing solutions designed to help startups grow efficiently.
            </p>
          </div>
        </div>
      </section>

      <section id="audit" className="py-16 scroll-mt-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <div className="w-20 h-20 bg-coral-100 rounded-full flex items-center justify-center mb-6">
                  <FileSearch className="text-coral-500" size={40} />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-semibold mb-4">Marketing Funnel Audit</h2>
                <p className="text-lg text-neutral-700 mb-6">
                  A comprehensive analysis of your existing marketing channels to identify what's working, what's not, and where to focus your resources.
                </p>
                <h3 className="text-xl font-medium mb-3 text-coral-500">What's Included:</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Channel Effectiveness Review:</strong> Analysis of your ATL, BTL, OOH, PR, Social Media, SEO/SEM, Influencer, CRM, and Email marketing activities.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Budget Allocation Analysis:</strong> Evaluation of your marketing spend against industry benchmarks and results.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Conversion Path Mapping:</strong> Identification of bottlenecks and drop-off points in your customer journey.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Competitive Positioning Assessment:</strong> How your marketing efforts compare to key competitors.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Actionable Recommendations:</strong> Clear, prioritized list of changes to improve ROI.</span>
                  </li>
                </ul>
                
                <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-md mb-8">
                  <p className="italic text-neutral-700">
                    "Not every brand needs everything. Our audit helps you identify which marketing channels actually drive value for your specific business."
                  </p>
                </div>
                
                <Button asChild>
                  <Link to="/contact" className="flex items-center">
                    Book a Marketing Audit <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="planning" className="py-16 bg-neutral-50 scroll-mt-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <div className="w-20 h-20 bg-coral-100 rounded-full flex items-center justify-center mb-6">
                  <PenTool className="text-coral-500" size={40} />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-semibold mb-4">Marketing Planning</h2>
                <p className="text-lg text-neutral-700 mb-6">
                  Strategic marketing planning tailored to your growth stage, market position, and available resources.
                </p>
                <h3 className="text-xl font-medium mb-3 text-coral-500">What's Included:</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>90-Day Action Plans:</strong> Practical, executable marketing roadmaps with clear milestones and KPIs.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Budget Allocation Strategy:</strong> Guidance on how to distribute your marketing resources for maximum impact.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Channel Prioritization:</strong> Focus on the platforms and tactics most likely to drive results for your specific business.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Content & Messaging Strategy:</strong> Development of key messages and content themes aligned with your business goals.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Growth Metrics Framework:</strong> Establishment of relevant KPIs and measurement methodologies.</span>
                  </li>
                </ul>
                
                <div className="p-4 bg-white border border-neutral-200 rounded-md mb-8">
                  <p className="italic text-neutral-700">
                    "We help you clarify what to focus on (and what to avoid), preventing the scattered approach that drains resources without delivering results."
                  </p>
                </div>
                
                <Button asChild>
                  <Link to="/contact" className="flex items-center">
                    Get a Marketing Plan <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="matching" className="py-16 scroll-mt-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <div className="w-20 h-20 bg-coral-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="text-coral-500" size={40} />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-semibold mb-4">Freelancer + Agency Matching</h2>
                <p className="text-lg text-neutral-700 mb-6">
                  Access to our vetted network of marketing professionals at rates that make sense for early-stage companies.
                </p>
                <h3 className="text-xl font-medium mb-3 text-coral-500">What's Included:</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Needs Assessment:</strong> Detailed understanding of your requirements before matching begins.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Curated Recommendations:</strong> Hand-selected freelancers or agencies based on your specific needs and budget.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Pre-vetted Talent:</strong> All partners in our network have been thoroughly evaluated for quality, reliability, and value.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Budget-aligned Options:</strong> From indie freelancers to boutique agencies to scaled partners.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="text-coral-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Engagement Oversight:</strong> Optional ongoing management to ensure quality and results.</span>
                  </li>
                </ul>
                
                <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-md mb-8">
                  <p className="italic text-neutral-700">
                    "We connect you with the right marketing resources at the right price point, eliminating the guesswork and risk of finding quality partners on your own."
                  </p>
                </div>
                
                <Button asChild>
                  <Link to="/contact" className="flex items-center">
                    Find Marketing Partners <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-coral-500 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to optimize your marketing?</h2>
            <p className="text-xl opacity-90 mb-8">
              Book a free marketing audit to see how we can help your startup grow more efficiently.
            </p>
            <Button asChild size="lg" className="bg-white text-coral-500 hover:bg-neutral-100">
              <Link to="/contact">Book a Free Audit</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
