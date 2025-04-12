
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  return (
    <main>
      <section className="pt-24 pb-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="title">About Budget & Brains</h1>
            <p className="subtitle">
              A founder-led marketing collective. We're here to un-complicate growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg">
                <p>
                  Budget & Brains was born from frustration. After years of watching startups waste precious funding on ineffective marketing, we decided there had to be a better way.
                </p>
                <p>
                  Many early-stage companies struggle with the same challenges: limited budgets, pressure to show growth, and confusion about where to focus their marketing efforts. Too often, they end up spending too much on the wrong channels or hiring expensive agencies that don't understand the unique constraints of startup life.
                </p>
                <p>
                  We created Budget & Brains to offer a smarter alternative: marketing consultation that combines strategic thinking with practical, cost-effective execution. Our approach is straightforward—focus on what works, eliminate what doesn't, and make every marketing dollar count.
                </p>
                <p>
                  Today, our collective of experienced marketers helps startups across industries build sustainable growth engines without burning through their runway.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6">Our Philosophy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-neutral-200">
                  <h3 className="text-xl font-medium mb-3">Measure What Matters</h3>
                  <p>
                    We believe in data-driven marketing that focuses on meaningful business metrics, not vanity numbers that look good in reports but don't drive growth.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-neutral-200">
                  <h3 className="text-xl font-medium mb-3">Less Can Be More</h3>
                  <p>
                    Effective marketing isn't about doing everything—it's about doing the right things well. We help you identify and focus on the channels that deliver real results.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-neutral-200">
                  <h3 className="text-xl font-medium mb-3">Align with Your Stage</h3>
                  <p>
                    Your marketing needs evolve as your company grows. We provide strategies tailored to your current stage, whether you're pre-product market fit or scaling rapidly.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-neutral-200">
                  <h3 className="text-xl font-medium mb-3">Build for Sustainability</h3>
                  <p>
                    We prioritize sustainable growth over short-term spikes. Our goal is to help you build marketing systems that deliver consistent results over time.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-coral-50 rounded-lg p-8 border border-coral-100 mb-16">
              <h2 className="text-2xl font-semibold mb-4 text-center">Built by marketers tired of wasted budgets.</h2>
              <p className="text-center text-lg mb-0">
                We've been in your shoes. We know the pressure to show results and the frustration of seeing resources squandered on ineffective tactics. That's why we're committed to helping startups grow smarter, not just more expensively.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-semibold mb-6">Ready to work with us?</h2>
              <p className="text-lg mb-8">
                Let's discuss how Budget & Brains can help your startup achieve smarter, more efficient growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Book a Free Audit</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
