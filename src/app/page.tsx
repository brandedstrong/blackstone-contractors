'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowRight, Shield, Award, Clock, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: '9+', label: 'Years Experience', icon: Clock },
  { number: '300+', label: 'Projects Completed', icon: Award },
  { number: '100%', label: 'Client Satisfaction', icon: Users },
  { number: '80mi', label: 'Service Radius', icon: Shield },
];

const services = [
  {
    title: 'Flatwork',
    description: 'Expert flat concrete surfaces for foundations, floors, and more.',
    href: '/services',
  },
  {
    title: 'Stamped Concrete',
    description: 'Beautiful decorative patterns that mimic stone, brick, and tile.',
    href: '/services',
  },
  {
    title: 'Driveways',
    description: 'Durable, attractive driveways built to withstand Pacific Northwest weather.',
    href: '/installations',
  },
  {
    title: 'Patios',
    description: 'Custom outdoor living spaces designed for beauty and function.',
    href: '/installations',
  },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-title-line', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
      });

      gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out',
      });

      gsap.from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.hero-scroll', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 1.2,
        ease: 'power3.out',
      });

      // Stats section
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Services section
      gsap.from('.services-title', {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // CTA section
      gsap.from('.cta-content', {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-[var(--color-warm-gray)] overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1a1a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
          <div className="overflow-hidden mb-4">
            <p className="hero-subtitle text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium">
              Premium Concrete Services • Orting, Washington
            </p>
          </div>

          <h1 className="mb-8">
            <div className="overflow-hidden">
              <span className="hero-title-line block headline-massive text-[var(--color-charcoal)]">
                Built on
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-title-line block headline-massive gold-text">
                Solid Ground
              </span>
            </div>
          </h1>

          <div className="overflow-hidden mb-12">
            <p className="hero-subtitle text-xl md:text-2xl text-[var(--color-medium-gray)] max-w-2xl mx-auto">
              9+ years of experience crafting exceptional concrete work. 
              From driveways to decorative patios, we deliver quality that lasts.
            </p>
          </div>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Estimate
              <ArrowUpRight size={18} />
            </Link>
            <Link href="/gallery" className="btn-secondary">
              View Our Work
            </Link>
          </div>

          <div className="hero-scroll absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 text-[var(--color-medium-gray)]">
              <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
              <div className="w-px h-12 bg-[var(--color-medium-gray)] animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="bg-[var(--color-charcoal)] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <stat.icon className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-4" />
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm tracking-[0.15em] uppercase text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-4">
                About Blackstone
              </p>
              <h2 className="headline-large text-[var(--color-charcoal)] mb-6">
                Owner Operated.<br />
                <span className="gold-text">Quality Focused.</span>
              </h2>
              <p className="text-lg text-[var(--color-medium-gray)] mb-6">
                Blackstone Contractors LLC brings over 9 years of hands-on experience 
                to every project. As an owner-operated business, we take personal pride 
                in delivering exceptional concrete work throughout King County, Pierce County, 
                and the greater Orting area.
              </p>
              <p className="text-lg text-[var(--color-medium-gray)] mb-8">
                Licensed, insured, and committed to excellence—we treat every project, 
                big or small, with the same attention to detail.
              </p>
              <Link href="/about" className="btn-secondary">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-[var(--color-warm-gray)] rounded-lg overflow-hidden">
                <div className="absolute inset-0 placeholder-image">
                  Concrete Work Image
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[var(--color-gold)] text-[var(--color-charcoal)] p-6 rounded-lg">
                <div className="text-3xl font-bold">2+</div>
                <div className="text-sm uppercase tracking-wider">Years in Business</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="section-padding bg-[var(--color-warm-gray)]">
        <div className="max-w-7xl mx-auto">
          <div className="services-title text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-4">
              What We Do
            </p>
            <h2 className="headline-large text-[var(--color-charcoal)]">
              Our Services
            </h2>
          </div>

          <div className="services-grid grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="service-card group bg-white p-8 lg:p-10 rounded-lg card-hover"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="headline-small text-[var(--color-charcoal)] group-hover:text-[var(--color-gold)] transition-colors">
                    {service.title}
                  </h3>
                  <ArrowUpRight
                    size={24}
                    className="text-[var(--color-medium-gray)] group-hover:text-[var(--color-gold)] transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <p className="text-[var(--color-medium-gray)]">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-4">
                Why Choose Us
              </p>
              <h2 className="headline-medium text-[var(--color-charcoal)] mb-6">
                The Blackstone Difference
              </h2>
              <p className="text-[var(--color-medium-gray)] mb-8">
                We're not just contractors—we're craftsmen dedicated to 
                transforming your vision into lasting concrete reality.
              </p>
              <Link href="/why-choose-us" className="btn-secondary">
                Learn More
              </Link>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Licensed & Insured',
                  description: 'Full coverage for your peace of mind on every project.',
                },
                {
                  title: 'Free Estimates',
                  description: 'Transparent pricing with no obligation quotes.',
                },
                {
                  title: 'Owner Operated',
                  description: 'Direct communication and personal attention to detail.',
                },
                {
                  title: '9+ Years Experience',
                  description: 'Proven expertise in all types of concrete work.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg hover:border-[var(--color-gold)] transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[var(--color-charcoal)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-medium-gray)] text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="relative py-24 lg:py-32 bg-[var(--color-charcoal)] overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="cta-content relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="headline-large text-white mb-6">
            Let's Build Something
            <span className="block gold-text">Together</span>
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Ready to transform your property with professional concrete work? 
            Contact us today for a free, no-obligation estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Get Your Free Estimate
              <ArrowUpRight size={18} />
            </Link>
            <a href="tel:2537667377" className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--color-charcoal)]">
              Call (253) 766-7377
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
