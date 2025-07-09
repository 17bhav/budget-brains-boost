
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, TrendingUp, Users, Target, Lightbulb, DollarSign } from 'lucide-react';

const BlogPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2000&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            How to Reduce Your Startup's Marketing Spend Without Losing Impact
          </h1>
          <h2 className="text-xl md:text-2xl font-medium opacity-90">
            Smart strategies for early-stage founders who want to do more with less
          </h2>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Keywords and Meta */}
          <div className="mb-8 p-4 bg-neutral-50 rounded-lg">
            <h3 className="text-sm font-semibold text-neutral-600 mb-2">Keywords:</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-coral-100 text-coral-700 rounded-full text-sm">reduce marketing spend</span>
              <span className="px-3 py-1 bg-coral-100 text-coral-700 rounded-full text-sm">startup marketing strategy</span>
              <span className="px-3 py-1 bg-coral-100 text-coral-700 rounded-full text-sm">budget-friendly marketing</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-neutral-700 mb-6">
                If you're a startup founder, you've probably asked yourself: <em>"Are we spending too much on marketing?"</em> From shiny new tools to retainer-heavy agencies, the spend adds up fast—and often, without enough ROI.
              </p>
              <p className="text-lg leading-relaxed text-neutral-700 mb-6">
                At Budget & Brains, we believe startups don't need a bigger marketing budget. They need a smarter marketing plan.
              </p>
            </div>
          </div>

          {/* Strategy Cards */}
          <div className="space-y-8 mb-12">
            {/* Strategy 1 */}
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Target className="h-8 w-8 text-coral-500 mr-4" />
                <div>
                  <CardTitle className="text-2xl">1. Audit Before You Act</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 mb-4">
                  Before cutting costs or switching tools, take a moment to understand what's currently working. A full-funnel audit looks at:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Which channels are driving actual leads?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>What tools are you paying for (and using only 10% of)?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Are there overlaps between your tech stack, freelancers, and agencies?</span>
                  </li>
                </ul>
                <div className="bg-coral-50 p-4 rounded-lg">
                  <p className="text-coral-800 font-medium">
                    👉 Most early-stage startups waste 20–40% of their marketing budget on things they don't need.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Strategy 2 */}
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <TrendingUp className="h-8 w-8 text-coral-500 mr-4" />
                <div>
                  <CardTitle className="text-2xl">2. Focus on High-ROI Channels</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 mb-4">
                  Instead of being everywhere, focus on the channels that convert for your business:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="p-4 bg-neutral-50 rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Email Marketing</h4>
                    <p className="text-sm text-neutral-600">low-cost, high-retention</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Organic SEO</h4>
                    <p className="text-sm text-neutral-600">long-term compounding traffic</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Partnerships & Communities</h4>
                    <p className="text-sm text-neutral-600">trust-based lead generation</p>
                  </div>
                </div>
                <p className="text-neutral-700 italic">
                  Your startup doesn't need to be on TikTok if your buyer is on LinkedIn.
                </p>
              </CardContent>
            </Card>

            {/* Strategy 3 */}
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Lightbulb className="h-8 w-8 text-coral-500 mr-4" />
                <div>
                  <CardTitle className="text-2xl">3. Swap Tools for Tactics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 mb-4">
                  A CRM, a landing page builder, an analytics tool, a campaign scheduler—each sounds essential, right? But what if one platform can do most of it?
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800">
                    💡 <strong>Tip:</strong> Use all-in-one or freemium tools until your ROI justifies expansion. And never let tools dictate your strategy.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Strategy 4 */}
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Users className="h-8 w-8 text-coral-500 mr-4" />
                <div>
                  <CardTitle className="text-2xl">4. Choose People, Not Packages</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 mb-4">
                  Big agencies are built for big brands. You're a startup. Instead of locking into long retainers, work with freelancers or fractional CMOs.
                </p>
                <p className="text-neutral-700">
                  Budget & Brains has a vetted network of specialists across budgets. We connect you with only what you need—no fluff, no oversell.
                </p>
              </CardContent>
            </Card>

            {/* Strategy 5 */}
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <DollarSign className="h-8 w-8 text-coral-500 mr-4" />
                <div>
                  <CardTitle className="text-2xl">5. Clarity Over Complexity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 mb-4">
                  What you don't do matters as much as what you do. Every channel, tool, or partner should have one job: to drive growth efficiently.
                </p>
                <p className="text-neutral-700 font-medium">
                  If something's not serving that goal—it's a cost, not an investment.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-coral-500 to-coral-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Trim the Fat?</h2>
            <p className="text-lg mb-6 opacity-90">
              We help startups like yours reduce their marketing spend by up to 50%—without losing results.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Book a free 30-minute audit with our team</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Get clarity on what to keep, cut, and change</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Build a lean, smart marketing engine</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button asChild variant="secondary" size="lg" className="bg-white text-coral-600 hover:bg-neutral-100">
                <Link to="/contact" onClick={scrollToTop}>Book Your Free Audit</Link>
              </Button>
              <div>
                <p className="text-lg font-semibold">Budget & Brains</p>
                <p className="italic opacity-90">Smart marketing. Scalable growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
