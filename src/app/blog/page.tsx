'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Calendar, Clock, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: 1,
    slug: 'choosing-right-concrete-finish',
    title: 'Choosing the Right Concrete Finish for Your Project',
    excerpt: 'From broom finish to stamped patterns, learn which concrete finish best suits your needs, budget, and aesthetic goals.',
    category: 'Tips & Guides',
    date: 'February 15, 2026',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 2,
    slug: 'concrete-maintenance-tips',
    title: '10 Essential Concrete Maintenance Tips',
    excerpt: 'Protect your investment with these simple maintenance practices that will extend the life of your concrete surfaces.',
    category: 'Maintenance',
    date: 'February 10, 2026',
    readTime: '4 min read',
    featured: true,
  },
  {
    id: 3,
    slug: 'stamped-concrete-vs-pavers',
    title: 'Stamped Concrete vs. Pavers: Which Is Right for You?',
    excerpt: 'A comprehensive comparison of stamped concrete and pavers to help you make the best decision for your patio or driveway.',
    category: 'Comparisons',
    date: 'February 5, 2026',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 4,
    slug: 'preparing-for-concrete-pour',
    title: 'How to Prepare Your Property for a Concrete Pour',
    excerpt: 'What homeowners need to know before the concrete truck arrives. Preparation tips for a smooth installation.',
    category: 'Tips & Guides',
    date: 'January 28, 2026',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 5,
    slug: 'concrete-curing-process',
    title: 'Understanding the Concrete Curing Process',
    excerpt: 'Why proper curing is crucial for strong, durable concrete and what to expect during the curing period.',
    category: 'Education',
    date: 'January 20, 2026',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 6,
    slug: 'winter-concrete-installation',
    title: 'Can You Pour Concrete in Winter? What You Need to Know',
    excerpt: 'Cold weather concrete installation is possible with proper precautions. Learn when it\'s safe and when to wait.',
    category: 'Tips & Guides',
    date: 'January 15, 2026',
    readTime: '4 min read',
    featured: false,
  },
];

const categories = ['All', 'Tips & Guides', 'Maintenance', 'Comparisons', 'Education'];

export default function BlogPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.from('.featured-post', {
        scrollTrigger: {
          trigger: '.featured-section',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.from('.blog-card', {
        scrollTrigger: {
          trigger: '.blog-grid',
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

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-[var(--color-warm-gray)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="hero-content max-w-4xl">
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-4">
              Blog
            </p>
            <h1 className="headline-large text-[var(--color-charcoal)] mb-6">
              Concrete<br />
              <span className="gold-text">Insights</span>
            </h1>
            <p className="text-xl text-[var(--color-medium-gray)] max-w-2xl">
              Tips, guides, and insights from our team to help you make informed 
              decisions about your concrete projects.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-section section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium">
              Featured Articles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="featured-post group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-[16/10] bg-[var(--color-warm-gray)] rounded-lg overflow-hidden mb-6">
                    <div className="w-full h-full placeholder-image group-hover:scale-105 transition-transform duration-500">
                      Blog Image
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-[var(--color-medium-gray)]">
                      <span className="text-[var(--color-gold)]">{post.category}</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="headline-small text-[var(--color-charcoal)] group-hover:text-[var(--color-gold)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[var(--color-medium-gray)]">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[var(--color-gold)] font-medium">
                      Read More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-[var(--color-warm-gray)] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-[var(--color-charcoal)] text-white'
                    : 'bg-white text-[var(--color-charcoal)] hover:bg-[var(--color-gold)] hover:text-[var(--color-charcoal)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="headline-medium text-[var(--color-charcoal)]">
              All Articles
            </h2>
          </div>

          <div className="blog-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="blog-card group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-[16/10] bg-[var(--color-warm-gray)] rounded-lg overflow-hidden mb-4">
                    <div className="w-full h-full placeholder-image group-hover:scale-105 transition-transform duration-500">
                      Blog Image
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4 text-xs text-[var(--color-medium-gray)]">
                      <span className="text-[var(--color-gold)]">{post.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--color-charcoal)] group-hover:text-[var(--color-gold)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[var(--color-medium-gray)] line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-[var(--color-charcoal)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="headline-medium text-white mb-4">
            Stay Informed
          </h2>
          <p className="text-white/70 mb-8">
            Get concrete tips and project inspiration delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[var(--color-gold)]"
            />
            <button className="btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="headline-medium text-[var(--color-charcoal)] mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-[var(--color-medium-gray)] mb-10">
            Contact us today for a free estimate.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Free Estimate
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
