'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/components/MusicToggle.module.scss';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <motion.button
      className={styles.musicToggle}
      onClick={toggleMusic}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <motion.span
            key="musicOn"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={styles.musicOn}
          >
            🛰️ Music On
            <span className={styles.waves}>
              <span className={styles.wave1}></span>
              <span className={styles.wave2}></span>
              <span className={styles.wave3}></span>
            </span>
          </motion.span>
        ) : (
          <motion.span
            key="musicOff"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            🚀 Music Off
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
} 