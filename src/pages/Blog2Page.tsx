
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Target, Search, Shield, Users, Lightbulb } from 'lucide-react';

const Blog2Page = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            What Does a Startup Marketing Consultant Actually Do?
          </h1>
          <h2 className="text-xl md:text-2xl font-medium opacity-90">
            Why your startup might need a marketing partner instead of a marketing agency
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
              <span className="px-3 py-1 bg-coral-100 text-coral-700 rounded-full text-sm">startup marketing consultant</span>
              <span className="px-3 py-1 bg-coral-100 text-coral-700 rounded-full text-sm">marketing help for startups</span>
              <span className="px-3 py-1 bg-coral-100 text-coral-700 rounded-full text-sm">marketing strategy consultant</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-neutral-700 mb-6">
                Startups often face a messy middle: you've launched the product, maybe raised some money, and now it's time to grow.
              </p>
              <p className="text-lg leading-relaxed text-neutral-700 mb-6">
                But… where do you start with marketing? Should you hire an agency? Build a team? Download a bunch of tools?
              </p>
              <p className="text-lg leading-relaxed text-neutral-700 mb-6">
                If you're feeling overwhelmed, this is where a startup marketing consultant comes in. Not someone who just gives advice—but someone who builds your growth strategy with you.
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
                  <CardTitle className="text-2xl">1. They Don't Just Do Marketing. They Build a Plan for Growth.</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 mb-4">
                  A consultant doesn't just post on Instagram or write ad copy. They ask:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Who is your target audience, really?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>What does your product solve—and for whom?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>What's the fastest, most cost-effective way to get you in front of them?</span>
                  </li>
                </ul>
                <div className="bg-coral-50 p-4 rounded-lg">
                  <p className="text-coral-800 font-medium">
                    💡 Think of a consultant as your temporary CMO—without the full-time salary.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Strategy 2 */}
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Search className="h-8 w-8 text-coral-500 mr-4" />
                <div>
                  <CardTitle className="text-2xl">2. They Audit What You're Already Doing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 mb-4">
                  Most startups have a few things already running: social media, email, maybe some ads. But is it all working together? Or is it just noise?
                </p>
                <p className="text-neutral-700 mb-4">A good marketing consultant will do a full-funnel audit:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>What's driving traffic?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>What's converting?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>What's wasting time and money?</span>
                  </li>
                </ul>
                <p className="text-neutral-700 italic">
                  At Budget & Brains, we start every project with this step.
                </p>
              </CardContent>
            </Card>

            {/* Strategy 3 */}
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Shield className="h-8 w-8 text-coral-500 mr-4" />
                <div>
                  <CardTitle className="text-2xl">3. They Help You Avoid Expensive Mistakes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Hiring a big agency too early</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Paying for tools you don't need</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Running Instagram ads when your audience is on LinkedIn</span>
                  </li>
                </ul>
                <p className="text-neutral-700">
                  Startups burn money fast when marketing isn't aligned to the business stage. A consultant keeps you focused—and lean.
                </p>
              </CardContent>
            </Card>

            {/* Strategy 4 */}
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Users className="h-8 w-8 text-coral-500 mr-4" />
                <div>
                  <CardTitle className="text-2xl">4. They Connect You to the Right People</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 mb-4">
                  Instead of Googling "top marketing agency" and hoping for the best, a consultant already knows who's worth hiring.
                </p>
                <p className="text-neutral-700 mb-4">At Budget & Brains, we have a vetted network of:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Freelancers for small projects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Agencies for full campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Specialists by budget and industry</span>
                  </li>
                </ul>
                <p className="text-neutral-700">
                  So you don't waste time or money on the wrong fit.
                </p>
              </CardContent>
            </Card>

            {/* Strategy 5 */}
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Lightbulb className="h-8 w-8 text-coral-500 mr-4" />
                <div>
                  <CardTitle className="text-2xl">5. They Grow With You</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 mb-4">
                  Marketing needs at Series A are very different from those at MVP stage. A consultant grows with your business—shaping your roadmap, scaling your ops, and eventually helping you hire the right team.
                </p>
                <p className="text-neutral-700 font-medium">
                  This is why we structure our work at Budget & Brains around flexibility, transparency, and results.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Decision Section */}
          <div className="mb-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800">How to Know If You Need a Marketing Consultant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">Ask yourself:</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-blue-700">Are you spending on marketing but don't know what's working?</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-blue-700">Do you need guidance, but not a full-time hire yet?</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-blue-700">Are you ready to scale, but not sure where to focus?</span>
                  </div>
                </div>
                <p className="text-blue-800 font-medium mt-4">If you said yes to even one, it's time.</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-coral-500 to-coral-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Make Marketing Easy Again</h2>
            <p className="text-lg mb-6 opacity-90">
              At Budget & Brains, we're not a marketing agency. We're part of your team—helping you grow smarter, not louder.
            </p>

            <div className="space-y-4">
              <Button asChild variant="secondary" size="lg" className="bg-white text-coral-600 hover:bg-neutral-100">
                <Link to="/contact" onClick={scrollToTop}>Book Your Free Strategy Session</Link>
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

export default Blog2Page;
