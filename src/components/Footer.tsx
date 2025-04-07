'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiPocket, 
  FiMail, 
  FiTwitter, 
  FiGithub, 
  FiLinkedin, 
  FiInstagram,
  FiChevronRight
} from 'react-icons/fi';
import styles from '../styles/components/Footer.module.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [easterEggActive, setEasterEggActive] = useState(false);
  
  const triggerEasterEgg = () => {
    setEasterEggActive(true);
    setTimeout(() => setEasterEggActive(false), 4000);
  };
  
  return (
    <footer className={styles.footer}>
      <AnimatePresence>
        {easterEggActive && (
          <motion.div 
            className={styles.rocketEasterEgg}
            initial={{ bottom: -100, opacity: 0 }}
            animate={{ bottom: '100%', opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4, ease: "easeOut" }}
          >
            <div className={styles.rocket}>🚀</div>
            <div className={styles.rocketTrail}></div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.logoSection}>
            <Link href="/" className={styles.logo}>
              <FiPocket />
              <span>Orbit</span>
            </Link>
            <div className={styles.logoRing}></div>
          </div>
          
          <div className={styles.navLinks}>
            <Link href="#features" className={styles.navLink}>Features</Link>
            <Link href="#testimonials" className={styles.navLink}>Testimonials</Link>
            <Link href="#" className={styles.navLink}>Pricing</Link>
            <Link href="#" className={styles.navLink}>About</Link>
            <Link href="#" className={styles.navLink}>Contact</Link>
          </div>
        </div>
        
        <div className={styles.footerMiddle}>
          <div className={styles.footerCol}>
            <h4>About Orbit</h4>
            <p>
              Orbit is a cutting-edge space-tech company specializing in AI-powered
              solutions for the next generation of space exploration and metaverse integration.
            </p>
            
            <div className={styles.socialLinks}>
              <motion.a 
                href="#" 
                className={styles.socialLink}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiTwitter />
              </motion.a>
              <motion.a 
                href="#" 
                className={styles.socialLink}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub />
              </motion.a>
              <motion.a 
                href="#" 
                className={styles.socialLink}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin />
              </motion.a>
              <motion.a 
                href="#" 
                className={styles.socialLink}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiInstagram />
              </motion.a>
            </div>
          </div>
          
          <div className={styles.footerCol}>
            <h4>Resources</h4>
            <ul>
              <li>
                <Link href="#">
                  <FiChevronRight /> Documentation
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FiChevronRight /> API Reference
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FiChevronRight /> Blog
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FiChevronRight /> Tutorials
                </Link>
              </li>
            </ul>
          </div>
          
          <div className={styles.footerCol}>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="#">
                  <FiChevronRight /> About Us
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FiChevronRight /> Careers
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FiChevronRight /> Press Kit
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FiChevronRight /> Partners
                </Link>
              </li>
            </ul>
          </div>
          
          <div className={styles.footerCol}>
            <h4>Contact</h4>
            <ul>
              <li>
                <Link href="mailto:contact@orbit.space">
                  <FiMail /> contact@orbit.space
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FiChevronRight /> Support
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FiChevronRight /> Sales
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FiChevronRight /> Report Bug
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            &copy; {currentYear} Orbit. All rights reserved. {' '}
            <span 
              className={styles.easterEggTrigger} 
              onClick={triggerEasterEgg}
            >
              👾 Built by stardust and code.
            </span>
          </div>
          
          <div className={styles.footerLinks}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 