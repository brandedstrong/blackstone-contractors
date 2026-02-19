'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Shield, Clock, Award, Wrench, Home, Building2, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const differentiators = [
  {
    icon: Clock,
    title: '9+ Years Experience',
    description: 'Nearly a decade of hands-on concrete work means we\'ve seen it all and solved it all. Your project benefits from lessons learned across hundreds of jobs.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Full licensing and comprehensive insurance coverage protect you and your property. Work with confidence knowing you\'re covered.',
  },
  {
    icon: Wrench,
    title: 'Owner Operated',
    description: 'When you call, the owner answers. No layers of management—direct communication ensures your vision is understood and executed.',
  },
  {
    icon: Award,
    title: 'Quality Guarantee',
    description: 'We stand behind our work. Every project is completed to the highest standards with attention to detail that shows in the finished product.',
  },
];

const residentialServices = [
  'Driveways',
  'Patios & Walkways',
  'Pool Decks',
  'Garage Floors',
  'Basement Floors',
  'Foundation Work',
  'Decorative Concrete',
  'Steps & Porches',
];

const commercialServices = [
  'Parking Lots',
  'Loading Docks',
  'Warehouse Floors',
  'Sidewalks',
  'Curb & Gutter',
  'Foundation Slabs',
  'Retail Spaces',
  'Industrial Floors',
];

export default function WhyChooseUsPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.from('.diff-card', {
        scrollTrigger: {
          trigger: '.diff-grid',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });

      gsap.from('.project-type', {
        scrollTrigger: {
          trigger: '.projects-section',
          start: 'top 80%',
        },
        y: 60,
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
              Why Choose Us
            </p>
            <h1 className="headline-large text-[var(--color-charcoal)] mb-6">
              The Blackstone<br />
              <span className="gold-text">Difference</span>
            </h1>
            <p className="text-xl text-[var(--color-medium-gray)] max-w-2xl">
              Not all concrete contractors are created equal. Discover why homeowners 
              and businesses trust Blackstone Contractors for their projects.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="diff-grid grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="diff-card p-8 lg:p-10 bg-[var(--color-warm-gray)] rounded-lg">
                <item.icon className="w-12 h-12 text-[var(--color-gold)] mb-6" />
                <h3 className="headline-small text-[var(--color-charcoal)] mb-4">
                  {item.title}
                </h3>
                <p className="text-[var(--color-medium-gray)] text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="projects-section section-padding bg-[var(--color-charcoal)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-4">
              Project Types
            </p>
            <h2 className="headline-medium text-white">
              Residential & Commercial
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Residential */}
            <div className="project-type bg-white/5 rounded-lg p-8 lg:p-10 border border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <Home className="w-10 h-10 text-[var(--color-gold)]" />
                <div>
                  <h3 className="text-2xl font-bold text-white">Residential</h3>
                  <p className="text-white/60">Our Primary Focus</p>
                </div>
              </div>
              <p className="text-white/70 mb-8">
                Most of our work is with homeowners looking to enhance their properties. 
                From new driveways to beautiful patios, we bring the same craftsmanship 
                to every residential project.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {residentialServices.map((service) => (
                  <div key={service} className="flex items-center gap-2 text-white/80">
                    <Check size={16} className="text-[var(--color-gold)] flex-shrink-0" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Commercial */}
            <div className="project-type bg-white/5 rounded-lg p-8 lg:p-10 border border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <Building2 className="w-10 h-10 text-[var(--color-gold)]" />
                <div>
                  <h3 className="text-2xl font-bold text-white">Commercial</h3>
                  <p className="text-white/60">Scaled for Business</p>
                </div>
              </div>
              <p className="text-white/70 mb-8">
                We also serve businesses with commercial concrete needs. Our experience 
                with larger-scale projects means we understand deadlines, specifications, 
                and the demands of commercial work.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {commercialServices.map((service) => (
                  <div key={service} className="flex items-center gap-2 text-white/80">
                    <Check size={16} className="text-[var(--color-gold)] flex-shrink-0" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-4">
              Our Process
            </p>
            <h2 className="headline-medium text-[var(--color-charcoal)]">
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We discuss your project, assess the site, and understand your vision.' },
              { step: '02', title: 'Estimate', description: 'You receive a detailed, transparent quote with no hidden fees.' },
              { step: '03', title: 'Execution', description: 'Our skilled team completes your project with precision and care.' },
              { step: '04', title: 'Walkthrough', description: 'We ensure you\'re completely satisfied before the job is done.' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-[var(--color-gold)]/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-charcoal)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--color-medium-gray)]">
                  {item.description}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gray-200 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Estimates */}
      <section className="section-padding bg-[var(--color-warm-gray)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[var(--color-gold)] text-[var(--color-charcoal)] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Check size={16} />
                Always Free
              </div>
              <h2 className="headline-medium text-[var(--color-charcoal)] mb-6">
                Free Estimates,<br />
                <span className="gold-text">No Obligations</span>
              </h2>
              <p className="text-lg text-[var(--color-medium-gray)] mb-6">
                We believe in transparent pricing. That's why every estimate is free, 
                detailed, and comes with no pressure or obligation. You'll know exactly 
                what to expect before any work begins.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Detailed written estimates',
                  'Transparent material costs',
                  'Clear timeline expectations',
                  'No hidden fees or surprises',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[var(--color-gold)]" />
                    <span className="text-[var(--color-charcoal)]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">
                Request Your Free Estimate
                <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full placeholder-image">
                Estimate / Planning Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[var(--color-charcoal)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="headline-medium text-white mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Join hundreds of satisfied customers who chose Blackstone Contractors 
            for their concrete projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Get Started Today
              <ArrowUpRight size={18} />
            </Link>
            <Link href="/gallery" className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--color-charcoal)]">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
