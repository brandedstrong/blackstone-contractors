'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const installations = [
  {
    id: 'driveways',
    title: 'Driveways',
    subtitle: 'First Impressions That Last',
    description: 'Your driveway is often the first thing visitors see. We create durable, attractive driveways designed to withstand the Pacific Northwest\'s demanding weather conditions while enhancing your home\'s curb appeal.',
    features: [
      'Proper grading for drainage',
      'Reinforced construction',
      'Multiple finish options',
      'Expansion joints for longevity',
      'Edge work and borders',
      'Sealing options available',
    ],
    finishOptions: ['Broom Finish', 'Stamped', 'Exposed Aggregate', 'Colored Concrete'],
  },
  {
    id: 'sidewalks',
    title: 'Sidewalks',
    subtitle: 'Safe & Beautiful Pathways',
    description: 'From front walkways to connecting paths throughout your property, our sidewalk installations combine safety with aesthetics. Proper slope and texture ensure safe passage in any weather.',
    features: [
      'ADA-compliant options',
      'Non-slip textures',
      'Proper drainage slope',
      'Custom widths available',
      'Decorative borders',
      'Integration with landscaping',
    ],
    finishOptions: ['Broom Finish', 'Stamped', 'Exposed Aggregate', 'Colored Concrete'],
  },
  {
    id: 'patios',
    title: 'Patios',
    subtitle: 'Outdoor Living Spaces',
    description: 'Extend your living space outdoors with a custom concrete patio. Whether you envision a cozy retreat or an expansive entertainment area, we bring your outdoor dreams to life.',
    features: [
      'Custom shapes and sizes',
      'Decorative options',
      'Built-in features available',
      'Fire pit integration',
      'Multi-level designs',
      'Furniture-friendly finishes',
    ],
    finishOptions: ['Stamped Patterns', 'Exposed Aggregate', 'Colored Concrete', 'Textured Finish'],
  },
  {
    id: 'steps',
    title: 'Steps & Stairs',
    subtitle: 'Functional & Elegant',
    description: 'Concrete steps provide safe, long-lasting access to your home or throughout your property. We build steps that meet code requirements while complementing your home\'s architecture.',
    features: [
      'Code-compliant rise and run',
      'Non-slip surfaces',
      'Integrated with walkways',
      'Matching finishes available',
      'Handrail provisions',
      'Lighting channel options',
    ],
    finishOptions: ['Broom Finish', 'Stamped Treads', 'Exposed Aggregate', 'Smooth Finish'],
  },
];

export default function InstallationsPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      installations.forEach((_, index) => {
        gsap.from(`.install-${index}`, {
          scrollTrigger: {
            trigger: `.install-${index}`,
            start: 'top 80%',
          },
          y: 80,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
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
              Installations
            </p>
            <h1 className="headline-large text-[var(--color-charcoal)] mb-6">
              Transform Your<br />
              <span className="gold-text">Property</span>
            </h1>
            <p className="text-xl text-[var(--color-medium-gray)] max-w-2xl">
              Professional installation of driveways, sidewalks, patios, and steps. 
              Built to last, designed to impress.
            </p>
          </div>
        </div>
      </section>

      {/* Installations List */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {installations.map((item, index) => (
            <div
              key={item.id}
              id={item.id}
              className={`install-${index} grid lg:grid-cols-2 gap-12 lg:gap-20`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-2">
                  {item.subtitle}
                </p>
                <h2 className="headline-medium text-[var(--color-charcoal)] mb-4">
                  {item.title}
                </h2>
                <p className="text-lg text-[var(--color-medium-gray)] mb-8">
                  {item.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-charcoal)] mb-4">
                    Features
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {item.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check size={16} className="text-[var(--color-gold)] flex-shrink-0" />
                        <span className="text-[var(--color-medium-gray)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-charcoal)] mb-4">
                    Finish Options
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.finishOptions.map((option) => (
                      <span
                        key={option}
                        className="px-3 py-1 bg-[var(--color-warm-gray)] text-[var(--color-charcoal)] text-sm rounded-full"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="btn-primary">
                  Get a Quote for {item.title}
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="aspect-[4/3] bg-[var(--color-warm-gray)] rounded-lg overflow-hidden sticky top-32">
                  <div className="w-full h-full placeholder-image">
                    {item.title} Image
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-[var(--color-charcoal)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-4">
              Our Installation Process
            </p>
            <h2 className="headline-medium text-white">
              From Planning to Perfection
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'Site Assessment', description: 'Evaluate conditions and requirements' },
              { step: '2', title: 'Preparation', description: 'Excavation and grading' },
              { step: '3', title: 'Formwork', description: 'Precise form construction' },
              { step: '4', title: 'Pour & Finish', description: 'Expert concrete placement' },
              { step: '5', title: 'Cure & Seal', description: 'Proper curing for durability' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--color-gold)] text-[var(--color-charcoal)] flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-padding bg-[var(--color-warm-gray)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="headline-medium text-[var(--color-charcoal)] mb-4">
              Explore More Services
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
              href="/additional-services"
              className="group bg-white p-8 rounded-lg flex justify-between items-center card-hover"
            >
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-charcoal)] group-hover:text-[var(--color-gold)] transition-colors">
                  Additional Services
                </h3>
                <p className="text-[var(--color-medium-gray)]">
                  Demolition & repairs
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
            Ready to Upgrade Your Property?
          </h2>
          <p className="text-xl text-[var(--color-medium-gray)] mb-10">
            Contact us today for a free estimate on your installation project.
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
