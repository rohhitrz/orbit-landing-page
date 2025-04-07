'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FiPocket, FiArrowRight } from 'react-icons/fi';
import OrbitCanvas from './OrbitCanvas';
import styles from '../styles/components/Hero.module.scss';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Explore Beyond Limits with Orbit';
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      
      if (index > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.starBackground}>
        <OrbitCanvas />
      </div>
      
      <div className={styles.heroContent}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span>{typedText}</span>
          <span className={styles.highlight}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              The Future Is Now
            </motion.span>
          </span>
        </motion.h1>
        
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A New Frontier of AI and Space Tech, delivering breakthrough innovations
          that are transforming the way we interact with the universe around us.
        </motion.p>
        
        <motion.div 
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ScrollLink
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >
            <motion.button 
              className={styles.primaryCta}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPocket />
              Launch Now
            </motion.button>
          </ScrollLink>
          
          <ScrollLink
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >
            <motion.button 
              className={styles.secondaryCta}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiArrowRight />
              Discover More
            </motion.button>
          </ScrollLink>
        </motion.div>
        
        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className={styles.mouseIcon}></div>
          <div className={styles.scrollText}>Scroll Down</div>
        </motion.div>
      </div>
    </section>
  );
} 