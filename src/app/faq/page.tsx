'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqCategories = [
  {
    name: 'General',
    questions: [
      {
        q: 'What areas do you serve?',
        a: 'We serve Orting, Washington and the surrounding area within an 80-mile radius. This includes all of King County, Pierce County, and many surrounding communities. Contact us to confirm we serve your specific location.',
      },
      {
        q: 'Are you licensed and insured?',
        a: 'Yes, Blackstone Contractors LLC is fully licensed and insured. We carry comprehensive liability insurance to protect you and your property throughout every project.',
      },
      {
        q: 'How long have you been in business?',
        a: 'Blackstone Contractors has been in business for 2 years, but our owner brings over 9 years of hands-on concrete experience to every project.',
      },
      {
        q: 'Do you offer free estimates?',
        a: 'Absolutely! We provide free, no-obligation estimates for all projects. Contact us to schedule yours.',
      },
    ],
  },
  {
    name: 'Project Timeline',
    questions: [
      {
        q: 'How long does a typical driveway installation take?',
        a: 'A standard residential driveway typically takes 2-3 days for preparation and pour, followed by a 7-day curing period before light use. You can drive on it after about 7 days, though full cure takes 28 days.',
      },
      {
        q: 'What is the concrete curing process?',
        a: 'Concrete curing is the process of maintaining adequate moisture and temperature for proper strength development. We typically recommend staying off new concrete for 24-48 hours, light foot traffic after 3 days, and vehicles after 7 days.',
      },
      {
        q: 'How far in advance should I schedule my project?',
        a: 'We recommend scheduling 2-4 weeks in advance during our busy season (spring through fall). Winter projects may have more flexibility, though weather conditions must be suitable for concrete work.',
      },
      {
        q: 'Can you pour concrete in rain or cold weather?',
        a: 'We avoid pouring during active rain or when temperatures are below 40°F. Cold weather pours are possible with proper precautions, but we\'ll always advise you on the best timing for quality results.',
      },
    ],
  },
  {
    name: 'Pricing',
    questions: [
      {
        q: 'How much does a concrete driveway cost?',
        a: 'Concrete driveway costs vary based on size, thickness, finish type, and site preparation needs. Basic broom finish driveways start around $8-12 per square foot, while decorative options like stamped concrete run $12-20+ per square foot. Contact us for a specific quote.',
      },
      {
        q: 'What factors affect concrete pricing?',
        a: 'Key factors include: square footage, concrete thickness, finish type (basic vs. decorative), site preparation/demolition needs, reinforcement requirements, accessibility, and any custom features.',
      },
      {
        q: 'Do you require a deposit?',
        a: 'Yes, we typically require a deposit to schedule your project and secure materials. The deposit amount varies by project size and is discussed during the estimate process.',
      },
      {
        q: 'Do you offer financing?',
        a: 'We can discuss payment options during your estimate. While we don\'t offer direct financing, we can work with you on payment schedules for larger projects.',
      },
    ],
  },
  {
    name: 'Services',
    questions: [
      {
        q: 'What types of concrete finishes do you offer?',
        a: 'We offer a full range of finishes including: broom finish, stamped concrete (various patterns), exposed aggregate, hard trowel, cast finish, and colored concrete. Visit our Services page for detailed descriptions.',
      },
      {
        q: 'Do you remove old concrete?',
        a: 'Yes, we provide complete demolition services including removal of old concrete, haul-away, and site preparation for new installation.',
      },
      {
        q: 'Can you repair existing concrete instead of replacing it?',
        a: 'Often, yes! Minor cracks, spalling, and surface damage can frequently be repaired. We\'ll assess your concrete and give you an honest recommendation on whether repair or replacement is the better investment.',
      },
      {
        q: 'Do you do commercial projects?',
        a: 'Yes, we handle both residential and commercial concrete projects. Commercial work includes parking lots, sidewalks, loading docks, and more.',
      },
    ],
  },
  {
    name: 'Maintenance',
    questions: [
      {
        q: 'How do I maintain my new concrete?',
        a: 'Keep it clean with regular sweeping and occasional washing. Seal decorative concrete every 2-3 years. Avoid de-icing chemicals in winter (use sand instead). Address any cracks promptly to prevent water infiltration.',
      },
      {
        q: 'Should I seal my concrete?',
        a: 'Sealing is highly recommended for decorative concrete and beneficial for standard concrete. It protects against staining, moisture penetration, and wear. We offer sealing services and can advise on the best products.',
      },
      {
        q: 'Why is my concrete cracking?',
        a: 'Some hairline cracks are normal due to concrete\'s natural shrinkage. Proper control joints minimize visible cracking. Larger cracks may indicate settling, poor installation, or excessive load. Contact us for an assessment if you\'re concerned.',
      },
      {
        q: 'How long will my concrete last?',
        a: 'Properly installed and maintained concrete can last 30+ years. Factors affecting longevity include installation quality, weather exposure, maintenance, and use patterns.',
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between gap-4 text-left"
      >
        <span className="text-lg font-medium text-[var(--color-charcoal)]">
          {question}
        </span>
        <span className="flex-shrink-0 mt-1">
          {isOpen ? (
            <Minus size={20} className="text-[var(--color-gold)]" />
          ) : (
            <Plus size={20} className="text-[var(--color-medium-gray)]" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-[var(--color-medium-gray)] pr-12">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('General');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  const activeFAQs = faqCategories.find((cat) => cat.name === activeCategory)?.questions || [];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-[var(--color-warm-gray)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="hero-content max-w-4xl">
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-4">
              FAQ
            </p>
            <h1 className="headline-large text-[var(--color-charcoal)] mb-6">
              Frequently Asked<br />
              <span className="gold-text">Questions</span>
            </h1>
            <p className="text-xl text-[var(--color-medium-gray)] max-w-2xl">
              Find answers to common questions about our services, process, 
              and what to expect when working with Blackstone Contractors.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-12 pb-6 border-b border-gray-200">
            {faqCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.name
                    ? 'bg-[var(--color-charcoal)] text-white'
                    : 'bg-[var(--color-warm-gray)] text-[var(--color-charcoal)] hover:bg-[var(--color-gold)]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Questions */}
          <div>
            {activeFAQs.map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-[var(--color-warm-gray)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-medium text-[var(--color-charcoal)] mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-[var(--color-medium-gray)] mb-8">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Us
              <ArrowUpRight size={18} />
            </Link>
            <a href="tel:2537667377" className="btn-secondary">
              Call (253) 766-7377
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[var(--color-charcoal)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="headline-medium text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Contact us today for a free, no-obligation estimate on your concrete project.
          </p>
          <Link href="/contact" className="btn-gold">
            Get Free Estimate
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
