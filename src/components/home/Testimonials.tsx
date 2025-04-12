
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Budget & Brains transformed our marketing approach. We reduced spend by 30% while doubling our conversion rate in just 3 months.",
    author: "Sana Nath",
    role: "Communication Head, The Knack",
    rating: 5
  },
  {
    id: 2,
    content: "Their freelancer matching service saved us thousands. We got top-tier talent at startup-friendly rates without sacrificing quality.",
    author: "Chaitanya Garg",
    role: "Co-Founder, Vrindavan Handlooms",
    rating: 5
  },
  {
    id: 3,
    content: "The marketing audit revealed critical inefficiencies in our funnel. The recommendations were practical and immediately actionable.",
    author: "Kritika Saini",
    role: "Director, GNH Group",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-neutral-100">
      <div className="container">
        <h2 className="section-title text-center">What Our Clients Say</h2>
        <p className="section-subtitle text-center mx-auto">
          We've helped numerous startups achieve better marketing results with optimized budgets.
        </p>

        <div className="mt-12 relative">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm">
              <div className="flex mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-coral-500 fill-coral-500" size={20} />
                ))}
              </div>
              <p className="text-xl md:text-2xl italic mb-8">"{testimonials[activeIndex].content}"</p>
              <div>
                <p className="font-semibold">{testimonials[activeIndex].author}</p>
                <p className="text-neutral-600">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? 'bg-coral-500' : 'bg-neutral-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-neutral-200 hover:bg-neutral-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-neutral-200 hover:bg-neutral-50"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
