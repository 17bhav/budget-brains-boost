
import { Link } from 'react-router-dom';
import { ArrowRight, FileSearch, PenTool, Users } from 'lucide-react';

const Services = () => {
  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We provide focused marketing consultation in three key areas, designed to maximize your budget and amplify your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-neutral-200 card-hover">
            <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mb-6">
              <FileSearch className="text-coral-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Marketing Funnel Audit</h3>
            <p className="text-neutral-600 mb-4">
              Comprehensive analysis of your existing marketing channels. We identify what's working, what's not, and how to optimize.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-sm text-neutral-600">ATL & BTL Channel Analysis</li>
              <li className="text-sm text-neutral-600">Social Media & SEO/SEM Review</li>
              <li className="text-sm text-neutral-600">CRM & Email Marketing Evaluation</li>
            </ul>
            <p className="text-sm font-medium text-coral-500 mb-4">
              Not every brand needs everything.
            </p>
            <Link to="/services#audit" className="flex items-center text-coral-500 font-medium hover:underline">
              Learn more <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm border border-neutral-200 card-hover">
            <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mb-6">
              <PenTool className="text-coral-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Marketing Planning</h3>
            <p className="text-neutral-600 mb-4">
              Craft lean, smart strategies that align with your current stage and budget. Clear focus on what matters now.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-sm text-neutral-600">90-day Action Plans</li>
              <li className="text-sm text-neutral-600">Budget Allocation Strategy</li>
              <li className="text-sm text-neutral-600">KPI Setting & Measurement</li>
            </ul>
            <p className="text-sm font-medium text-coral-500 mb-4">
              Clarify what to focus on (and what to avoid).
            </p>
            <Link to="/services#planning" className="flex items-center text-coral-500 font-medium hover:underline">
              Learn more <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm border border-neutral-200 card-hover">
            <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mb-6">
              <Users className="text-coral-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Freelancer + Agency Matching</h3>
            <p className="text-neutral-600 mb-4">
              Access our vetted depository of budget-aligned partners from indie freelancers to scaled agencies.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-sm text-neutral-600">Curated Partner Network</li>
              <li className="text-sm text-neutral-600">Pre-screened for Quality & Value</li>
              <li className="text-sm text-neutral-600">Matched to Your Specific Needs</li>
            </ul>
            <p className="text-sm font-medium text-coral-500 mb-4">
              The right resource at the right price.
            </p>
            <Link to="/services#matching" className="flex items-center text-coral-500 font-medium hover:underline">
              Learn more <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
