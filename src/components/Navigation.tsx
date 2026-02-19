'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, Clock, Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/why-choose-us', label: 'Why Choose Us' },
  {
    label: 'Services',
    children: [
      { href: '/services', label: 'Concrete Services' },
      { href: '/installations', label: 'Installations' },
      { href: '/additional-services', label: 'Additional Services' },
    ],
  },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-[var(--color-charcoal)] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:2537667377" className="flex items-center gap-2 hover:text-[var(--color-gold)] transition-colors">
              <Phone size={14} />
              <span>(253) 766-7377</span>
            </a>
            <a href="mailto:BLACSTONE7377@GMAIL.COM" className="flex items-center gap-2 hover:text-[var(--color-gold)] transition-colors">
              <Mail size={14} />
              <span>BLACSTONE7377@GMAIL.COM</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>Mon – Sat | 7:00 AM – 7:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed top-0 lg:top-[40px] left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'frosted-glass shadow-lg lg:top-0'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-[var(--color-charcoal)]' : 'text-[var(--color-charcoal)]'}`}>
                BLACKSTONE
              </span>
              <span className={`text-xs tracking-[0.3em] uppercase transition-colors ${isScrolled ? 'text-[var(--color-medium-gray)]' : 'text-[var(--color-medium-gray)]'}`}>
                Contractors LLC
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                        isScrolled ? 'text-[var(--color-charcoal)]' : 'text-[var(--color-charcoal)]'
                      } hover:text-[var(--color-gold)]`}
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 pt-2">
                        <div className="frosted-glass rounded-lg shadow-xl py-2 min-w-[200px]">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-2 text-sm transition-colors hover:bg-[var(--color-gold)] hover:text-[var(--color-charcoal)] ${
                                pathname === child.href ? 'text-[var(--color-gold)]' : 'text-[var(--color-charcoal)]'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? 'text-[var(--color-gold)]'
                        : isScrolled
                        ? 'text-[var(--color-charcoal)]'
                        : 'text-[var(--color-charcoal)]'
                    } hover:text-[var(--color-gold)]`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/contact" className="btn-gold">
                Free Estimate
              </Link>
            </div>

            {/* Mobile Menu Button - Custom Design */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-12 h-12 relative"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-[var(--color-charcoal)] transition-all duration-300 ${
                  isMobileOpen ? 'rotate-45 translate-y-1' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[var(--color-charcoal)] mt-1.5 transition-all duration-300 ${
                  isMobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[var(--color-charcoal)] mt-1.5 transition-all duration-300 ${
                  isMobileOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 top-20 bg-white transition-all duration-500 ${
            isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="p-6 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className="flex items-center justify-between w-full py-4 text-xl font-medium border-b border-gray-100"
                  >
                    {link.label}
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openDropdown === link.label && (
                    <div className="pl-4 py-2 space-y-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block py-2 text-lg ${
                            pathname === child.href ? 'text-[var(--color-gold)]' : 'text-[var(--color-medium-gray)]'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={`block py-4 text-xl font-medium border-b border-gray-100 ${
                    pathname === link.href ? 'text-[var(--color-gold)]' : ''
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-6">
              <Link href="/contact" className="btn-gold w-full justify-center">
                Free Estimate
              </Link>
            </div>
            <div className="pt-6 space-y-4 text-sm text-[var(--color-medium-gray)]">
              <a href="tel:2537667377" className="flex items-center gap-2">
                <Phone size={16} />
                (253) 766-7377
              </a>
              <a href="mailto:BLACSTONE7377@GMAIL.COM" className="flex items-center gap-2">
                <Mail size={16} />
                BLACSTONE7377@GMAIL.COM
              </a>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                Mon – Sat | 7:00 AM – 7:00 PM
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
