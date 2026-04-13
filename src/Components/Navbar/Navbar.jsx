/** @format */

import { useState, useEffect } from "react";
import { Menu, X, Shield, Cpu, Terminal, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/LuthorCorp.jpg";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Service", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-700 ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl border-b border-brand-navy/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[90rem] items-center justify-between px-8 lg:px-12">
        {/* Logo Section */}
        <Link to="/#hero" className="group flex items-center gap-2 sm:gap-4">
          <div className="relative">
            <div className="absolute -inset-2 bg-brand-emerald/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src={logo}
              alt="LuthorCorp"
              className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-brand-navy/10 object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <span className="text-base sm:text-xl font-bold tracking-[0.15em] sm:tracking-[0.25em] text-brand-navy">
            LUTHOR<span className="text-brand-emerald">CORP</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-grey/60 transition-all hover:text-brand-navy hover:tracking-[0.35em]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-px bg-brand-navy/10" />

          <a
            href="/#contact"
            className="group relative px-8 py-2.5 bg-brand-navy text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(12,22,35,0.2)] active:scale-95"
          >
            <div className="absolute inset-0 bg-brand-emerald opacity-0 group-hover:opacity-10 transition-opacity" />
            <span className="relative z-10">Get Started with Us</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-brand-navy transition-colors hover:bg-brand-navy/5 rounded-full lg:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-x-0 top-full bg-white border-t border-brand-navy/5 shadow-2xl lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-bold uppercase tracking-[0.3em] text-brand-grey hover:text-brand-navy transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-brand-navy text-white py-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl mt-4 shadow-xl"
              >
                Get Started with Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
