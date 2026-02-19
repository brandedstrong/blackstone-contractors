'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Shield, Clock, Award, Users, Target, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'Every pour, every finish, every detail matters. We never cut corners.',
  },
  {
    icon: Users,
    title: 'Client Focus',
    description: 'Your vision is our mission. We listen, adapt, and deliver.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Honest pricing, clear communication, and work we stand behind.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Continuous improvement in our craft and service delivery.',
  },
];

export default function AboutPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-hero-content > *', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.from('.story-content', {
        scrollTrigger: {
          trigger: '.story-section',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.value-card', {
        scrollTrigger: {
          trigger: '.values-grid',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
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
          <div className="about-hero-content max-w-4xl">
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-4">
              About Us
            </p>
            <h1 className="headline-large text-[var(--color-charcoal)] mb-6">
              Built on Experience,<br />
              <span className="gold-text">Driven by Excellence</span>
            </h1>
            <p className="text-xl text-[var(--color-medium-gray)] max-w-2xl">
              For over 9 years, we've been transforming properties across Washington 
              with premium concrete work that stands the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="story-content">
              <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-4">
                Our Story
              </p>
              <h2 className="headline-medium text-[var(--color-charcoal)] mb-6">
                From Passion to Profession
              </h2>
              <div className="space-y-6 text-[var(--color-medium-gray)]">
                <p>
                  Blackstone Contractors LLC was founded on a simple belief: quality concrete work 
                  should be accessible to everyone. With over 9 years of hands-on experience in the 
                  industry, our founder recognized a gap between what clients deserved and what many 
                  contractors delivered.
                </p>
                <p>
                  After years of perfecting the craft working on projects of all sizes—from intimate 
                  residential patios to expansive commercial foundations—Blackstone Contractors was 
                  born. We've been serving the Orting, Washington area and beyond for 2 years now, 
                  bringing that same dedication to every project.
                </p>
                <p>
                  As an owner-operated business, every project receives personal attention. When you 
                  work with Blackstone, you're not just getting a contractor—you're getting a partner 
                  invested in your project's success.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-[var(--color-warm-gray)] rounded-lg overflow-hidden">
                <div className="absolute inset-0 placeholder-image">
                  Team / Owner Photo
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[var(--color-charcoal)] text-white p-8 rounded-lg">
                <div className="text-4xl font-bold text-[var(--color-gold)]">9+</div>
                <div className="text-sm uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Operated */}
      <section className="section-padding bg-[var(--color-charcoal)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-4">
                Owner Operated
              </p>
              <h2 className="headline-medium text-white mb-6">
                Direct Access,<br />
                Better Results
              </h2>
              <p className="text-white/70 mb-6">
                When you hire Blackstone Contractors, you work directly with the owner. 
                No middlemen, no miscommunication—just clear, direct dialogue from 
                estimate to final walkthrough.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-[var(--color-gold)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Licensed</h3>
                    <p className="text-white/60 text-sm">Fully licensed contractor</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-[var(--color-gold)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Insured</h3>
                    <p className="text-white/60 text-sm">Complete coverage protection</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-[var(--color-gold)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Responsive</h3>
                    <p className="text-white/60 text-sm">Quick communication</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-[var(--color-gold)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Experienced</h3>
                    <p className="text-white/60 text-sm">9+ years in the trade</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-[var(--color-slate)] rounded-lg overflow-hidden">
                <div className="absolute inset-0 placeholder-image text-white/50">
                  Owner at Work
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-4">
              Our Values
            </p>
            <h2 className="headline-medium text-[var(--color-charcoal)]">
              What Drives Us
            </h2>
          </div>

          <div className="values-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="value-card text-center p-8 bg-[var(--color-warm-gray)] rounded-lg">
                <value.icon className="w-12 h-12 text-[var(--color-gold)] mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-[var(--color-charcoal)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--color-medium-gray)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-[var(--color-warm-gray)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-4">
                Service Area
              </p>
              <h2 className="headline-medium text-[var(--color-charcoal)] mb-6">
                Proudly Serving<br />
                <span className="gold-text">The Pacific Northwest</span>
              </h2>
              <p className="text-[var(--color-medium-gray)] mb-6">
                Based in Orting, Washington, we serve clients within an 80-mile radius, 
                including all of King County and Pierce County.
              </p>
              <div className="space-y-3 mb-8">
                {['Orting', 'Puyallup', 'Tacoma', 'Seattle Area', 'King County', 'Pierce County'].map((area) => (
                  <div key={area} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full" />
                    <span className="text-[var(--color-charcoal)]">{area}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">
                Check If We Serve Your Area
                <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full placeholder-image">
                Service Area Map
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[var(--color-charcoal)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="headline-medium text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Let's discuss your project and show you why Blackstone Contractors 
            is the right choice for your concrete needs.
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
