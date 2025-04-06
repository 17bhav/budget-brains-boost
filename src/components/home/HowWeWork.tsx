
import { Clock, Globe, MessageSquare, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HowWeWork = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">
            Our remote-first, async culture allows us to provide flexible and efficient marketing consultation for your startup.
          </p>
          <Button asChild className="mt-6">
            <Link to="/how-we-work">Learn More About Our Approach</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg border border-neutral-200 card-hover">
            <div className="flex items-start">
              <div className="mr-4">
                <Globe className="text-coral-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Remote-first, Async Culture</h3>
                <p className="text-neutral-600">
                  Work with marketing experts from around the world, benefiting from diverse perspectives and time zone coverage.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-neutral-200 card-hover">
            <div className="flex items-start">
              <div className="mr-4">
                <Users className="text-coral-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Profit-sharing Team Model</h3>
                <p className="text-neutral-600">
                  Our team is incentivized by your success. We share in the results we help create, aligning our goals with yours.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-neutral-200 card-hover">
            <div className="flex items-start">
              <div className="mr-4">
                <Clock className="text-coral-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Work from Anywhere, Anytime</h3>
                <p className="text-neutral-600">
                  Flexible scheduling means you get support when you need it, without rigid 9-to-5 constraints.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-neutral-200 card-hover">
            <div className="flex items-start">
              <div className="mr-4">
                <MessageSquare className="text-coral-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Daily Async Briefs + Weekly 1:1s</h3>
                <p className="text-neutral-600">
                  Stay updated through daily asynchronous communication, complemented by focused weekly one-on-one sessions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-coral-50 rounded-lg p-8 border border-coral-100">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Built by marketers tired of wasted budgets.</h3>
            <p className="text-lg text-neutral-600 mb-6">
              We've been there. We've seen the waste. And we've built a better way forward for startups that need smart growth.
            </p>
            <Button asChild>
              <Link to="/about">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
