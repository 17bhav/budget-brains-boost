
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Clock, Globe, MessageSquare, Target, Users } from 'lucide-react';

const HowWeWorkPage = () => {
  return (
    <main>
      <section className="pt-24 pb-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="title">How We Work</h1>
            <p className="subtitle">
              Our unique approach to marketing consulting focuses on efficiency, flexibility, and results.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-neutral-700 mb-8">
              At Budget & Brains, we believe in doing things differently. Our approach is designed to provide maximum value to early-stage companies and startups while respecting your budget constraints.
            </p>

            <div className="space-y-16">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mb-4">
                    <Globe className="text-coral-500" size={32} />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-4">Remote-first, Async Culture</h2>
                  <p className="mb-4">
                    Our team operates fully remotely, allowing us to tap into global talent and provide services across different time zones. This means you get access to diverse perspectives and expertise, regardless of your location.
                  </p>
                  <p>
                    Being async-first means we're focused on outcomes, not hours logged. We communicate clearly and document extensively to ensure seamless collaboration without requiring constant meetings.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="text-coral-500" size={32} />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-4">Profit-sharing Team Model</h2>
                  <p className="mb-4">
                    Unlike traditional agencies that bill by the hour, our team operates on a profit-sharing model. This means we're directly incentivized to deliver results that impact your bottom line.
                  </p>
                  <p>
                    We're not just consultants; we're partners in your success. When you win, we win—creating perfect alignment between our goals and yours.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mb-4">
                    <Clock className="text-coral-500" size={32} />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-4">Work from Anywhere, Anytime</h2>
                  <p className="mb-4">
                    We understand that startups don't operate on a traditional 9-to-5 schedule. Neither do we. Our flexible approach means you get support when you need it, not just during standard business hours.
                  </p>
                  <p>
                    This flexibility extends to our engagement models as well. Whether you need a one-time audit, ongoing advisory, or project-based support, we adapt to your needs rather than forcing you into rigid service tiers.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mb-4">
                    <Target className="text-coral-500" size={32} />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-4">No Micromanagement, Just Shared Goals</h2>
                  <p className="mb-4">
                    We believe in setting clear objectives and giving our team the autonomy to achieve them. This same principle applies to how we work with you.
                  </p>
                  <p>
                    Instead of dictating exactly how things should be done, we focus on outcomes and provide guidance, allowing your team to maintain ownership while benefiting from our expertise.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="text-coral-500" size={32} />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-4">Daily Async Briefs + Weekly 1:1s</h2>
                  <p className="mb-4">
                    Our communication rhythm balances efficiency with accessibility. Daily asynchronous updates keep everyone informed without disrupting workflow, while scheduled weekly one-on-ones provide dedicated time for deeper discussions.
                  </p>
                  <p>
                    This cadence ensures you're never left wondering about progress while minimizing the meeting overload that plagues traditional consulting relationships.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-coral-50 rounded-lg p-8 mt-16 border border-coral-100">
              <h3 className="text-xl font-semibold mb-4">Ready to experience our approach?</h3>
              <p className="mb-6">
                Book a free marketing audit and see firsthand how our unique way of working can benefit your startup.
              </p>
              <Button asChild>
                <Link to="/contact">Book a Free Audit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowWeWorkPage;
