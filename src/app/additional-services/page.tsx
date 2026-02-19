'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowRight, Check, Hammer, Wrench } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AdditionalServicesPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.from('.service-block', {
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 80%',
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-[var(--color-warm-gray)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="hero-content max-w-4xl">
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-4">
              Additional Services
            </p>
            <h1 className="headline-large text-[var(--color-charcoal)] mb-6">
              Complete Concrete<br />
              <span className="gold-text">Solutions</span>
            </h1>
            <p className="text-xl text-[var(--color-medium-gray)] max-w-2xl">
              Beyond new installations, we offer demolition and repair services 
              to handle every aspect of your concrete project.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section section-padding bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Demolition */}
          <div className="service-block grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full bg-[var(--color-gold)] flex items-center justify-center">
                  <Hammer className="w-7 h-7 text-[var(--color-charcoal)]" />
                </div>
                <div>
                  <h2 className="headline-medium text-[var(--color-charcoal)]">
                    Demolition
                  </h2>
                </div>
              </div>

              <p className="text-lg text-[var(--color-medium-gray)] mb-6">
                When old concrete needs to go, we handle the entire demolition process 
                safely and efficiently. Our team removes existing concrete to prepare 
                for your new installation or to simply clear the space.
              </p>

              <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-charcoal)] mb-4">
                  What We Demolish
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Old driveways',
                    'Damaged sidewalks',
                    'Cracked patios',
                    'Foundation sections',
                    'Garage floors',
                    'Steps and porches',
                    'Retaining walls',
                    'Commercial slabs',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check size={16} className="text-[var(--color-gold)] flex-shrink-0" />
                      <span className="text-[var(--color-medium-gray)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8 p-6 bg-[var(--color-warm-gray)] rounded-lg">
                <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">
                  Our Demolition Process
                </h3>
                <ol className="space-y-2 text-[var(--color-medium-gray)]">
                  <li className="flex gap-3">
                    <span className="text-[var(--color-gold)] font-semibold">1.</span>
                    Site assessment and planning
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--color-gold)] font-semibold">2.</span>
                    Safe, controlled demolition
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--color-gold)] font-semibold">3.</span>
                    Complete debris removal
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--color-gold)] font-semibold">4.</span>
                    Site cleanup and preparation
                  </li>
                </ol>
              </div>

              <Link href="/contact" className="btn-primary">
                Get a Demolition Quote
                <ArrowRight size={18} />
              </Link>
            </div>

            <div>
              <div className="aspect-[4/3] bg-[var(--color-warm-gray)] rounded-lg overflow-hidden">
                <div className="w-full h-full placeholder-image">
                  Demolition Work Image
                </div>
              </div>
            </div>
          </div>

          {/* Repairs */}
          <div className="service-block grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full bg-[var(--color-gold)] flex items-center justify-center">
                  <Wrench className="w-7 h-7 text-[var(--color-charcoal)]" />
                </div>
                <div>
                  <h2 className="headline-medium text-[var(--color-charcoal)]">
                    Repairs
                  </h2>
                </div>
              </div>

              <p className="text-lg text-[var(--color-medium-gray)] mb-6">
                Not all concrete needs replacement. Our repair services restore damaged 
                concrete to like-new condition, saving you money while extending the life 
                of your existing surfaces.
              </p>

              <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-charcoal)] mb-4">
                  Common Repairs
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Crack repair',
                    'Spalling fix',
                    'Settling correction',
                    'Surface restoration',
                    'Joint repair',
                    'Edge repair',
                    'Patching',
                    'Resurfacing',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check size={16} className="text-[var(--color-gold)] flex-shrink-0" />
                      <span className="text-[var(--color-medium-gray)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8 p-6 bg-[var(--color-warm-gray)] rounded-lg">
                <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">
                  When to Repair vs. Replace
                </h3>
                <p className="text-[var(--color-medium-gray)] text-sm mb-4">
                  Not sure if your concrete needs repair or full replacement? 
                  We'll assess your situation and give you an honest recommendation.
                </p>
                <ul className="space-y-2 text-[var(--color-medium-gray)] text-sm">
                  <li className="flex gap-2">
                    <span className="text-[var(--color-gold)]">•</span>
                    Minor cracks and surface damage often repairable
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-gold)]">•</span>
                    Major settling may require replacement
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-gold)]">•</span>
                    We always recommend the most cost-effective solution
                  </li>
                </ul>
              </div>

              <Link href="/contact" className="btn-primary">
                Schedule a Repair Assessment
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="lg:order-1">
              <div className="aspect-[4/3] bg-[var(--color-warm-gray)] rounded-lg overflow-hidden">
                <div className="w-full h-full placeholder-image">
                  Concrete Repair Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for These Services */}
      <section className="section-padding bg-[var(--color-charcoal)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="headline-medium text-white mb-4">
              Why Choose Blackstone for<br />
              <span className="gold-text">Demolition & Repairs</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Safety First',
                description: 'Proper equipment, trained crew, and adherence to safety protocols protect your property and our team.',
              },
              {
                title: 'Clean Results',
                description: 'We don\'t just demolish—we clean up completely. Your site will be ready for the next phase.',
              },
              {
                title: 'Honest Assessments',
                description: 'We\'ll tell you if repair is possible or if replacement is the better long-term investment.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-[var(--color-warm-gray)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="headline-medium text-[var(--color-charcoal)] mb-4">
              Explore Our Other Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/services"
              className="group bg-white p-8 rounded-lg flex justify-between items-center card-hover"
            >
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-charcoal)] group-hover:text-[var(--color-gold)] transition-colors">
                  Concrete Services
                </h3>
                <p className="text-[var(--color-medium-gray)]">
                  Flatwork, stamped concrete, finishes & more
                </p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-[var(--color-medium-gray)] group-hover:text-[var(--color-gold)] transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <Link
              href="/installations"
              className="group bg-white p-8 rounded-lg flex justify-between items-center card-hover"
            >
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-charcoal)] group-hover:text-[var(--color-gold)] transition-colors">
                  Installations
                </h3>
                <p className="text-[var(--color-medium-gray)]">
                  Driveways, sidewalks, patios & steps
                </p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-[var(--color-medium-gray)] group-hover:text-[var(--color-gold)] transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="headline-medium text-[var(--color-charcoal)] mb-6">
            Need Demolition or Repairs?
          </h2>
          <p className="text-xl text-[var(--color-medium-gray)] mb-10">
            Contact us for a free assessment and quote on your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Estimate
              <ArrowUpRight size={18} />
            </Link>
            <a href="tel:2537667377" className="btn-secondary">
              Call (253) 766-7377
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
