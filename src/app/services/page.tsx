'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 'flatwork',
    title: 'Flatwork',
    description: 'The foundation of quality concrete work. Our flatwork services create level, durable surfaces for a wide range of applications.',
    details: [
      'Foundation slabs',
      'Garage floors',
      'Basement floors',
      'Warehouse floors',
      'Commercial slabs',
    ],
    image: 'Flatwork Image',
  },
  {
    id: 'stamped',
    title: 'Stamped Concrete',
    description: 'Add elegance and character with decorative stamped patterns. We can replicate the look of natural stone, brick, tile, and more.',
    details: [
      'Natural stone patterns',
      'Brick patterns',
      'Slate textures',
      'Custom designs',
      'Color integration',
    ],
    image: 'Stamped Concrete Image',
  },
  {
    id: 'broom',
    title: 'Broom Finish',
    description: 'A classic, slip-resistant finish perfect for outdoor applications. The textured surface provides excellent traction in all conditions.',
    details: [
      'Driveways',
      'Sidewalks',
      'Pool decks',
      'Patios',
      'Commercial walkways',
    ],
    image: 'Broom Finish Image',
  },
  {
    id: 'exposed',
    title: 'Exposed Aggregate',
    description: 'Reveal the natural beauty of stone aggregates for a unique, textured finish that\'s both decorative and durable.',
    details: [
      'Decorative driveways',
      'Patios',
      'Pool surrounds',
      'Walkways',
      'Accent borders',
    ],
    image: 'Exposed Aggregate Image',
  },
  {
    id: 'hard-trowel',
    title: 'Hard Trowel Floors',
    description: 'Ultra-smooth, dense concrete surfaces ideal for industrial and commercial applications requiring a polished appearance.',
    details: [
      'Warehouse floors',
      'Industrial facilities',
      'Commercial spaces',
      'Garage floors',
      'Retail environments',
    ],
    image: 'Hard Trowel Image',
  },
  {
    id: 'cast',
    title: 'Cast Finish',
    description: 'Precision-formed concrete for architectural elements and structural components requiring exacting standards.',
    details: [
      'Architectural elements',
      'Structural walls',
      'Retaining walls',
      'Foundation walls',
      'Custom forms',
    ],
    image: 'Cast Finish Image',
  },
  {
    id: 'top-cast',
    title: 'Top Cast / Top Finish',
    description: 'Premium surface finishing for visible concrete elements, ensuring a smooth, professional appearance.',
    details: [
      'Countertops',
      'Decorative surfaces',
      'Visible structural elements',
      'Architectural details',
      'Custom finishes',
    ],
    image: 'Top Cast Image',
  },
];

export default function ServicesPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      services.forEach((_, index) => {
        gsap.from(`.service-${index}`, {
          scrollTrigger: {
            trigger: `.service-${index}`,
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
              Concrete Services
            </p>
            <h1 className="headline-large text-[var(--color-charcoal)] mb-6">
              Crafting Excellence<br />
              <span className="gold-text">In Every Pour</span>
            </h1>
            <p className="text-xl text-[var(--color-medium-gray)] max-w-2xl">
              From standard flatwork to decorative finishes, we offer a complete range 
              of concrete services to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`service-${index} grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-block bg-[var(--color-gold)]/10 text-[var(--color-gold)] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  0{index + 1}
                </div>
                <h2 className="headline-medium text-[var(--color-charcoal)] mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-[var(--color-medium-gray)] mb-6">
                  {service.description}
                </p>
                <div className="mb-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-charcoal)] mb-4">
                    Applications
                  </h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-[var(--color-medium-gray)]">
                        <div className="w-1.5 h-1.5 bg-[var(--color-gold)] rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className="btn-secondary">
                  Get a Quote
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="aspect-[4/3] bg-[var(--color-warm-gray)] rounded-lg overflow-hidden">
                  <div className="w-full h-full placeholder-image">
                    {service.image}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-[var(--color-warm-gray)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="headline-medium text-[var(--color-charcoal)] mb-4">
              Related Services
            </h2>
            <p className="text-[var(--color-medium-gray)]">
              Explore our complete range of concrete solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
      <section className="py-24 lg:py-32 bg-[var(--color-charcoal)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="headline-medium text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Contact us today for a free estimate on your concrete project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Get Free Estimate
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
