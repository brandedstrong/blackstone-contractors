'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.from('.contact-form', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out',
      });

      gsap.from('.contact-info', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to an API
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-[var(--color-warm-gray)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="hero-content max-w-4xl">
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-4">
              Contact Us
            </p>
            <h1 className="headline-large text-[var(--color-charcoal)] mb-6">
              Let's Build<br />
              <span className="gold-text">Together</span>
            </h1>
            <p className="text-xl text-[var(--color-medium-gray)] max-w-2xl">
              Ready to start your project? Get in touch for a free estimate. 
              We're here to answer your questions and bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3 contact-form">
              <h2 className="headline-small text-[var(--color-charcoal)] mb-8">
                Request a Free Estimate
              </h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700">
                    Your message has been sent. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                        placeholder="(253) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="driveway">Driveway</option>
                        <option value="patio">Patio</option>
                        <option value="sidewalk">Sidewalk</option>
                        <option value="steps">Steps</option>
                        <option value="stamped">Stamped Concrete</option>
                        <option value="flatwork">Flatwork</option>
                        <option value="demolition">Demolition</option>
                        <option value="repair">Repair</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors resize-none"
                      placeholder="Tell us about your project. Include dimensions if known, your location, and any specific requirements..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 contact-info">
              <div className="bg-[var(--color-charcoal)] rounded-lg p-8 lg:p-10 text-white sticky top-32">
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

                <div className="space-y-6">
                  <a
                    href="tel:2537667377"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[var(--color-gold)] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[var(--color-charcoal)]" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Phone</p>
                      <p className="text-lg font-medium group-hover:text-[var(--color-gold)] transition-colors">
                        (253) 766-7377
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:BLACSTONE7377@GMAIL.COM"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[var(--color-gold)] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[var(--color-charcoal)]" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Email</p>
                      <p className="text-lg font-medium group-hover:text-[var(--color-gold)] transition-colors break-all">
                        BLACSTONE7377@GMAIL.COM
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-gold)] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[var(--color-charcoal)]" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Service Area</p>
                      <p className="text-lg font-medium">
                        Orting, Washington
                      </p>
                      <p className="text-white/70 text-sm">
                        Serving 80 mile radius<br />
                        King County • Pierce County
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-gold)] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[var(--color-charcoal)]" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Hours</p>
                      <p className="text-lg font-medium">
                        Monday – Saturday
                      </p>
                      <p className="text-white/70">
                        7:00 AM – 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-white/70 text-sm mb-4">
                    Call us directly for immediate assistance or fill out the form for a detailed estimate.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-full">
                      <Check size={14} className="text-[var(--color-gold)]" />
                      Free Estimates
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-full">
                      <Check size={14} className="text-[var(--color-gold)]" />
                      Licensed & Insured
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-[var(--color-warm-gray)]">
        <div className="w-full h-full placeholder-image">
          Service Area Map - Orting, WA
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="headline-medium text-[var(--color-charcoal)]">
              Explore Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Concrete Services', description: 'Flatwork, stamped, finishes', href: '/services' },
              { title: 'Installations', description: 'Driveways, patios, sidewalks', href: '/installations' },
              { title: 'Gallery', description: 'See our completed work', href: '/gallery' },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group p-8 bg-[var(--color-warm-gray)] rounded-lg hover:bg-[var(--color-charcoal)] transition-colors"
              >
                <h3 className="text-xl font-semibold text-[var(--color-charcoal)] group-hover:text-white transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--color-medium-gray)] group-hover:text-white/70 transition-colors">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
