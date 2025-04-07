'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import styles from '../styles/components/ThemeToggle.module.scss';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely show the theme toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';

  return (
    <motion.button
      className={styles.themeToggle}
      onClick={toggleTheme}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className={styles.toggleIconWrapper}>
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              className={styles.iconContainer}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiMoon className={styles.moonIcon} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              className={styles.iconContainer}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiSun className={styles.sunIcon} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <span className={styles.srOnly}>
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </motion.button>
  );
} 