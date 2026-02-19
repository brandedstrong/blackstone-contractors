'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';

const services = [
  { name: 'Flatwork', href: '/services' },
  { name: 'Stamped Concrete', href: '/services' },
  { name: 'Driveways', href: '/installations' },
  { name: 'Patios', href: '/installations' },
  { name: 'Demolition', href: '/additional-services' },
  { name: 'Repairs', href: '/additional-services' },
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Why Choose Us', href: '/why-choose-us' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-charcoal)] text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="headline-large text-white mb-4">
                Ready to Start<br />
                <span className="gold-text">Your Project?</span>
              </h2>
              <p className="text-white/70 text-lg max-w-md">
                Get a free estimate from our experienced team. We serve King County, 
                Pierce County, and the greater Orting area.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/contact" className="btn-gold">
                Get Free Estimate
                <ArrowUpRight size={18} />
              </Link>
              <a href="tel:2537667377" className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--color-charcoal)]">
                Call (253) 766-7377
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight">BLACKSTONE</span>
              <span className="block text-xs tracking-[0.3em] uppercase text-white/60">Contractors LLC</span>
            </Link>
            <p className="text-white/70 mb-6">
              Premium concrete services with 9+ years of experience. Licensed, insured, 
              and committed to excellence in every pour.
            </p>
            <div className="flex gap-4">
              <span className="inline-flex items-center gap-2 text-sm text-[var(--color-gold)]">
                Licensed & Insured
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-white/70 hover:text-[var(--color-gold)] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:2537667377"
                  className="flex items-start gap-3 text-white/70 hover:text-[var(--color-gold)] transition-colors"
                >
                  <Phone size={18} className="mt-1 flex-shrink-0" />
                  <span>(253) 766-7377</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:BLACSTONE7377@GMAIL.COM"
                  className="flex items-start gap-3 text-white/70 hover:text-[var(--color-gold)] transition-colors"
                >
                  <Mail size={18} className="mt-1 flex-shrink-0" />
                  <span>BLACSTONE7377@GMAIL.COM</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>
                  Orting, Washington<br />
                  <span className="text-sm">Serving 80 mile radius</span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <span>
                  Monday – Saturday<br />
                  7:00 AM – 7:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>© {currentYear} Blackstone Contractors LLC. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/faq" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/faq" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
