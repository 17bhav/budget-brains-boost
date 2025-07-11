
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Target, Scissors, Repeat, Focus, Search } from 'lucide-react';

const Blog3Page = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Marketing on a Budget: A Startup's Guide to Doing More With Less
          </h1>
          <h2 className="text-xl md:text-2xl font-medium opacity-90">
            You don't need more spend, you need more strategy.
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
              <span className="px-3 py-1 bg-coral-100 text-coral-700 rounded-full text-sm">marketing on a budget</span>
              <span className="px-3 py-1 bg-coral-100 text-coral-700 rounded-full text-sm">startup marketing strategy</span>
              <span className="px-3 py-1 bg-coral-100 text-coral-700 rounded-full text-sm">lean marketing</span>
              <span className="px-3 py-1 bg-coral-100 text-coral-700 rounded-full text-sm">cost-effective marketing</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-neutral-700 mb-6">
                You've got ₹1 lakh or less a month to spend on marketing. Your competitors are on billboards. And you're wondering if you should boost that one Instagram post again.
              </p>
              <p className="text-lg leading-relaxed text-neutral-700 mb-6">
                Here's the truth: you don't need a bigger budget—you need a smarter strategy. This is the lean startup guide to getting the most from your marketing rupee.
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
                  <CardTitle className="text-2xl">1. Choose One Goal, Ruthlessly</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 mb-4">
                  Trying to do everything—leads, awareness, engagement, traffic—will drain your time and budget. Pick one clear objective for the next 90 days:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Generate 100 qualified leads</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Get 10 demo bookings per week</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Build a waitlist of 500 people</span>
                  </li>
                </ul>
                <div className="bg-coral-50 p-4 rounded-lg">
                  <p className="text-coral-800 font-medium">
                    💡 A focused strategy = focused spending.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Strategy 2 */}
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Scissors className="h-8 w-8 text-coral-500 mr-4" />
                <div>
                  <CardTitle className="text-2xl">2. Stop Buying Tools You Don't Use</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 mb-4">
                  Startups love shiny software—CRMs, email tools, AI generators, analytics dashboards. But are you actually using them?
                </p>
                <p className="text-neutral-700 mb-4">
                  We've audited dozens of startups who pay for 5–10 tools but only actively use 2.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800">
                    💡 <strong>Tip:</strong> Cancel what you're not using and reinvest the money into content, freelancers, or ads that drive results.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Strategy 3 */}
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Repeat className="h-8 w-8 text-coral-500 mr-4" />
                <div>
                  <CardTitle className="text-2xl">3. Reuse Content Like a Pro</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 mb-4">One blog post =</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>5 LinkedIn posts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>3 carousels for Instagram</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>1 email newsletter</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>2 reels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>1 tweet thread</span>
                  </li>
                </ul>
                <p className="text-neutral-700 font-medium">
                  Create less, distribute more. Consistency beats volume.
                </p>
              </CardContent>
            </Card>

            {/* Strategy 4 */}
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Focus className="h-8 w-8 text-coral-500 mr-4" />
                <div>
                  <CardTitle className="text-2xl">4. Focus on Channels That Actually Convert</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 mb-4">
                  You don't need to be on every platform. Where are your buyers actually hanging out?
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="p-4 bg-neutral-50 rounded-lg text-center">
                    <h4 className="font-semibold mb-2">B2B SaaS</h4>
                    <p className="text-sm text-neutral-600">LinkedIn and Email</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg text-center">
                    <h4 className="font-semibold mb-2">D2C Fashion</h4>
                    <p className="text-sm text-neutral-600">Instagram and Influencers</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Local Services</h4>
                    <p className="text-sm text-neutral-600">Google Search and WhatsApp</p>
                  </div>
                </div>
                <p className="text-neutral-700 font-medium">
                  Spend your time and money only where it matters.
                </p>
              </CardContent>
            </Card>

            {/* Strategy 5 */}
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <CheckCircle className="h-8 w-8 text-coral-500 mr-4" />
                <div>
                  <CardTitle className="text-2xl">5. Find People Who Fit Your Budget</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 mb-4">
                  You don't need to hire an agency with a ₹3L retainer. You need:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>A good content writer who gets your voice</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>A designer who delivers fast</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>A performance marketer who understands ROI</span>
                  </li>
                </ul>
                <p className="text-neutral-700">
                  At Budget & Brains, we connect you with the right talent based on your budget—not ours.
                </p>
              </CardContent>
            </Card>

            {/* Strategy 6 */}
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Search className="h-8 w-8 text-coral-500 mr-4" />
                <div>
                  <CardTitle className="text-2xl">6. Get an Audit Before You Spend Another Rupee</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 mb-4">
                  Before you launch your next campaign, get an expert pair of eyes on:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Your website</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Your current performance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Your marketing funnel</span>
                  </li>
                </ul>
                <p className="text-neutral-700">
                  We've helped startups cut spend by 30% and increase conversion just by tightening the plan.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-coral-500 to-coral-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Smarter, Not Louder?</h2>
            <p className="text-lg mb-6 opacity-90">
              Book your free strategy audit today. Let's do marketing that actually works.
            </p>

            <div className="space-y-4">
              <Button asChild variant="secondary" size="lg" className="bg-white text-coral-600 hover:bg-neutral-100">
                <Link to="/contact" onClick={scrollToTop}>Book Your Free Strategy Audit</Link>
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

export default Blog3Page;
