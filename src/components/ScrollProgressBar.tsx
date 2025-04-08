'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import styles from '../styles/components/ScrollProgressBar.module.scss';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Only show the progress bar after scrolling a bit
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled !== isVisible) {
        setIsVisible(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <div className={styles.progressBarContainer}>
      <motion.div 
        className={`${styles.progressBar} ${isVisible ? styles.visible : ''}`}
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
} 