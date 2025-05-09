
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { supabase } from '../lib/supabase'; // adjust path as needed

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    message: '',

  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const { data, error } = await supabase.from('contact_messages').insert([formData]);
  
    
    
    if (error) {
      toast.error('Something went wrong', {
        description: error.message,
      });
    } else {
      toast.success('Your message has been sent!', {
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        website: '',
        message: '',
      });
    }
  
    setIsSubmitting(false);
  };

  return (
    <main>
      <section className="pt-24 pb-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="title">Get in Touch</h1>
            <p className="subtitle">
              Ready to optimize your marketing? Let's discuss how Budget & Brains can help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-semibold mb-6">Contact Info</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4">
                      <Mail className="text-coral-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a href="mailto:bhavika@budgetandbrains.com" className="text-coral-500 hover:underline">
                        bhavika@budgetandbrains.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4">
                      <Phone className="text-coral-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <a href="tel:+919971653396" className="text-coral-500 hover:underline">
                        +91 9971653396
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4">
                      <MessageSquare className="text-coral-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Book a Call</h3>
                      <a href="#" className="text-coral-500 hover:underline">
                        Schedule via Calendly
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                    <h3 className="text-lg font-medium mb-3">Free Marketing Audit</h3>
                    <p className="mb-4">
                      Fill out the form to book your free 30-minute marketing audit with one of our experts.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <h2 className="text-3xl font-semibold mb-6" id="contactForm">Tell Us About Your Startup</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Name <span className="text-coral-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email <span className="text-coral-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block mb-2 font-medium">
                        Company Name <span className="text-coral-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block mb-2 font-medium">
                        Website
                      </label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
                      />
                    </div>
                  </div>
                  
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Tell us about your marketing challenges <span className="text-coral-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Book a Free Audit'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-neutral-600 mb-12">
              Have questions about working with us? Here are answers to some common queries.
            </p>
            
            <div className="space-y-8 text-left">
              <div>
                <h3 className="text-xl font-medium mb-2">How quickly can we get started?</h3>
                <p>
                  After our initial call, we can typically start an audit within 1-2 business days. For ongoing advisory relationships, we aim to kick off within one week of agreement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Do you work with early-stage startups?</h3>
                <p>
                  Absolutely! We specialize in helping early-stage companies make the most of limited marketing resources. Our strategies are specifically designed for companies that need to be efficient with their spending.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">What industries do you work with?</h3>
                <p>
                  We've worked with B2B SaaS, consumer tech, fintech, healthtech, and e-commerce startups, among others. While we have experience across many sectors, our marketing principles apply broadly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
