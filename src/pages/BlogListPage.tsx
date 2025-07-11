
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogListPage = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Reduce Your Startup's Marketing Spend Without Losing Impact",
      subtitle: "Smart strategies for early-stage founders who want to do more with less",
      excerpt: "If you're a startup founder, you've probably asked yourself: 'Are we spending too much on marketing?' From shiny new tools to retainer-heavy agencies, the spend adds up fast—and often, without enough ROI.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
      date: "December 2024",
      readTime: "8 min read",
      path: "/blog/reduce-marketing-spend",
      keywords: ["reduce marketing spend", "startup marketing strategy", "budget-friendly marketing"]
    },
    {
      id: 2,
      title: "What Does a Startup Marketing Consultant Actually Do?",
      subtitle: "Why your startup might need a marketing partner instead of a marketing agency",
      excerpt: "Startups often face a messy middle: you've launched the product, maybe raised some money, and now it's time to grow. But… where do you start with marketing?",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
      date: "December 2024",
      readTime: "7 min read",
      path: "/blog/startup-marketing-consultant",
      keywords: ["startup marketing consultant", "marketing help for startups", "marketing strategy consultant"]
    },
    {
      id: 3,
      title: "Marketing on a Budget: A Startup's Guide to Doing More With Less",
      subtitle: "You don't need more spend, you need more strategy.",
      excerpt: "You've got ₹1 lakh or less a month to spend on marketing. Your competitors are on billboards. And you're wondering if you should boost that one Instagram post again.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
      date: "December 2024",
      readTime: "9 min read",
      path: "/blog/marketing-on-budget",
      keywords: ["marketing on a budget", "startup marketing strategy", "lean marketing", "cost-effective marketing"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-coral-500 to-coral-600 text-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Budget & Brains Blog
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Smart marketing insights for startup founders who want to do more with less
            </p>
            <p className="text-lg opacity-80">
              Practical strategies, real-world case studies, and actionable tips to grow your startup efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Blog List */}
      <div className="container py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {blogs.map((blog) => (
              <Card key={blog.id} className="card-hover overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div 
                      className="h-64 md:h-full bg-cover bg-center"
                      style={{ backgroundImage: `url("${blog.image}")` }}
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 text-sm text-neutral-500 mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl mb-2 hover:text-coral-600 transition-colors">
                        <Link to={blog.path}>{blog.title}</Link>
                      </CardTitle>
                      <p className="text-lg text-neutral-600 font-medium">{blog.subtitle}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-neutral-700 mb-4 leading-relaxed">
                        {blog.excerpt}
                      </p>
                      
                      {/* Keywords */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {blog.keywords.map((keyword) => (
                            <span 
                              key={keyword}
                              className="px-2 py-1 bg-coral-100 text-coral-700 rounded text-sm"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button asChild variant="outline" className="group">
                        <Link to={blog.path}>
                          Read Full Article
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-neutral-100 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Put These Strategies to Work?</h2>
            <p className="text-lg text-neutral-600 mb-8">
              Get personalized marketing advice for your startup with a free strategy session.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Book Your Free Audit</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
