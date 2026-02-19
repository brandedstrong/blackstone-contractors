'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const categories = ['All', 'Driveways', 'Patios', 'Sidewalks', 'Stamped', 'Commercial'];

const galleryItems = [
  { id: 1, category: 'Driveways', title: 'Modern Broom Finish Driveway', location: 'Puyallup, WA' },
  { id: 2, category: 'Patios', title: 'Stamped Stone Patio', location: 'Orting, WA' },
  { id: 3, category: 'Stamped', title: 'Decorative Stamped Walkway', location: 'Tacoma, WA' },
  { id: 4, category: 'Driveways', title: 'Exposed Aggregate Driveway', location: 'Sumner, WA' },
  { id: 5, category: 'Sidewalks', title: 'Residential Sidewalk System', location: 'Bonney Lake, WA' },
  { id: 6, category: 'Commercial', title: 'Commercial Parking Area', location: 'Kent, WA' },
  { id: 7, category: 'Patios', title: 'Backyard Entertainment Patio', location: 'Auburn, WA' },
  { id: 8, category: 'Stamped', title: 'Stamped Concrete Steps', location: 'Federal Way, WA' },
  { id: 9, category: 'Driveways', title: 'Custom Colored Driveway', location: 'Renton, WA' },
  { id: 10, category: 'Commercial', title: 'Warehouse Floor Installation', location: 'Fife, WA' },
  { id: 11, category: 'Patios', title: 'Pool Deck & Patio', location: 'Lake Tapps, WA' },
  { id: 12, category: 'Sidewalks', title: 'ADA-Compliant Walkway', location: 'University Place, WA' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.from('.gallery-item', {
        scrollTrigger: {
          trigger: '.gallery-grid',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handlePrev = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage);
    const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setSelectedImage(filteredItems[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage);
    const nextIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(filteredItems[nextIndex].id);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-[var(--color-warm-gray)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="hero-content max-w-4xl">
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-4">
              Our Work
            </p>
            <h1 className="headline-large text-[var(--color-charcoal)] mb-6">
              Project<br />
              <span className="gold-text">Gallery</span>
            </h1>
            <p className="text-xl text-[var(--color-medium-gray)] max-w-2xl">
              Browse our portfolio of completed projects. From residential driveways 
              to commercial installations, see the quality that defines Blackstone.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-[var(--color-charcoal)] text-white'
                    : 'bg-[var(--color-warm-gray)] text-[var(--color-charcoal)] hover:bg-[var(--color-gold)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item.id)}
                className="gallery-item group relative aspect-square overflow-hidden rounded-lg bg-[var(--color-warm-gray)]"
              >
                <div className="absolute inset-0 placeholder-image group-hover:scale-110 transition-transform duration-500">
                  Project {item.id}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <p className="text-white font-medium text-sm">{item.title}</p>
                  <p className="text-white/70 text-xs">{item.location}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-[var(--color-gold)] transition-colors"
          >
            <X size={32} />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-6 text-white hover:text-[var(--color-gold)] transition-colors"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 text-white hover:text-[var(--color-gold)] transition-colors"
          >
            <ChevronRight size={48} />
          </button>

          <div className="max-w-5xl max-h-[80vh] mx-auto px-20">
            <div className="aspect-video bg-[var(--color-slate)] rounded-lg overflow-hidden">
              <div className="w-full h-full placeholder-image text-white/50">
                {filteredItems.find((item) => item.id === selectedImage)?.title}
              </div>
            </div>
            <div className="text-center mt-6">
              <h3 className="text-white text-xl font-medium">
                {filteredItems.find((item) => item.id === selectedImage)?.title}
              </h3>
              <p className="text-white/60">
                {filteredItems.find((item) => item.id === selectedImage)?.location}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <section className="py-20 bg-[var(--color-charcoal)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '300+', label: 'Projects Completed' },
              { number: '9+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '80mi', label: 'Service Radius' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl lg:text-5xl font-bold text-[var(--color-gold)] mb-2">
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

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="headline-medium text-[var(--color-charcoal)] mb-6">
            Ready to Create Your Project?
          </h2>
          <p className="text-xl text-[var(--color-medium-gray)] mb-10">
            Let's discuss your vision and bring it to life with quality concrete work.
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
