'use client';

import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt4, HiX } from 'react-icons/hi';
import { FiPocket } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import styles from '../styles/components/Navbar.module.scss';

const navLinks = [
  { name: 'Home', to: 'hero', offset: 0 },
  { name: 'Features', to: 'features', offset: -70 },
  { name: 'Testimonials', to: 'testimonials', offset: -70 },
  { name: 'Contact', to: 'cta', offset: -70 },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when item clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FiPocket size={24} />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Orbit
          </motion.span>
        </div>

        <div className={styles.navLinks}>
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
            >
              <ScrollLink
                className={styles.navLink}
                to={link.to}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={800}
                activeClass={styles.active}
              >
                {link.name}
              </ScrollLink>
            </motion.div>
          ))}
          <motion.div
            className={styles.themeToggleWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <ThemeToggle />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <ScrollLink
              className={styles.ctaButton}
              to="cta"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            >
              Get Started
            </ScrollLink>
          </motion.div>
        </div>

        <motion.div
          className={styles.mobileMenuButton}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt4 size={24} />}
        </motion.div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <ScrollLink
                    className={styles.navLink}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={link.offset}
                    duration={800}
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </ScrollLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                exit={{ opacity: 0, y: 10 }}
                className={styles.mobileThemeToggle}
              >
                <ThemeToggle />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <ScrollLink
                  className={styles.ctaButton}
                  to="cta"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  onClick={closeMobileMenu}
                >
                  Get Started
                </ScrollLink>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
} 