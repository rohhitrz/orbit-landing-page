'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { FiChevronRight } from 'react-icons/fi';
import CountdownTimer from './CountdownTimer';
import styles from '../styles/components/CTA.module.scss';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// Animation data for rocket launch
const rocketLaunchAnimation = {
  v: "5.9.0",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "Rocket",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Rocket",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            { t: 0, s: [50, 100], e: [50, 80], i: { x: 0.25, y: 0.5 }, o: { x: 0.5, y: 0.5 } },
            { t: 30, s: [50, 80], e: [50, 0], i: { x: 0.5, y: 0.5 }, o: { x: 0.75, y: 0.5 } },
            { t: 60 }
          ],
          ix: 2
        },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0, 0],
                    [0, 0],
                    [0, 0]
                  ],
                  o: [
                    [0, 0],
                    [0, 0],
                    [0, 0]
                  ],
                  v: [
                    [0, 20],
                    [10, 0],
                    [-10, 0]
                  ],
                  c: true
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: false
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false
            }
          ],
          nm: "Group 1",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false
        }
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Flames",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [100], e: [50], i: { x: [0.25], y: [1] }, o: { x: [0.75], y: [0] } },
            { t: 15, s: [50], e: [100], i: { x: [0.25], y: [1] }, o: { x: [0.75], y: [0] } },
            { t: 30, s: [100], e: [50], i: { x: [0.25], y: [1] }, o: { x: [0.75], y: [0] } },
            { t: 45, s: [50], e: [100], i: { x: [0.25], y: [1] }, o: { x: [0.75], y: [0] } },
            { t: 60 }
          ],
          ix: 11
        },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            { t: 0, s: [50, 110], e: [50, 90], i: { x: 0.25, y: 0.5 }, o: { x: 0.5, y: 0.5 } },
            { t: 30, s: [50, 90], e: [50, 20], i: { x: 0.5, y: 0.5 }, o: { x: 0.75, y: 0.5 } },
            { t: 60 }
          ],
          ix: 2
        },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: {
          a: 1,
          k: [
            { t: 0, s: [100, 100], e: [120, 120], i: { x: [0.25, 0.25], y: [1, 1] }, o: { x: [0.75, 0.75], y: [0, 0] } },
            { t: 15, s: [120, 120], e: [100, 100], i: { x: [0.25, 0.25], y: [1, 1] }, o: { x: [0.75, 0.75], y: [0, 0] } },
            { t: 30, s: [100, 100], e: [120, 120], i: { x: [0.25, 0.25], y: [1, 1] }, o: { x: [0.75, 0.75], y: [0, 0] } },
            { t: 45, s: [120, 120], e: [100, 100], i: { x: [0.25, 0.25], y: [1, 1] }, o: { x: [0.75, 0.75], y: [0, 0] } },
            { t: 60 }
          ],
          ix: 6
        }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                  ],
                  o: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                  ],
                  v: [
                    [0, 0],
                    [-5, 10],
                    [0, 5],
                    [5, 10],
                    [0, 0]
                  ],
                  c: true
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: false
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 0.5, 0, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false
            }
          ],
          nm: "Group 1",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false
        }
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0
    }
  ],
  markers: []
};

export default function CTA() {
  const [isHovering, setIsHovering] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [tMinusVisible, setTMinusVisible] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovering(true);
    setTMinusVisible(true);
    // Reset countdown
    setCountdown(5);
    
    // Start countdown
    const timer = setInterval(() => {
      setCountdown(prevCount => {
        if (prevCount <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
    
    // Clear interval on hover end
    return () => clearInterval(timer);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setTMinusVisible(false);
  };

  return (
    <section id="cta" className={styles.cta}>
      <div className={styles.ring}></div>
      <div className={styles.ring}></div>
      <div className={styles.ring}></div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            Be the First to Experience the Future
          </motion.h2>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Join our early access program and explore the possibilities of Orbit technology.
            Our revolutionary platform is changing the way humans interact with space and AI.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.ctaWrapper}
          >
            <div className={styles.ctaButtonContainer}>
              <motion.button 
                className={styles.ctaButton}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0, 210, 255, 0.8)"
                }}
                animate={{
                  boxShadow: isHovering 
                    ? ["0 0 15px rgba(0, 210, 255, 0.6)", "0 0 25px rgba(0, 210, 255, 0.8)", "0 0 15px rgba(0, 210, 255, 0.6)"]
                    : "0 0 15px rgba(0, 210, 255, 0.4)"
                }}
                transition={{ 
                  duration: isHovering ? 1.5 : 0.3,
                  repeat: isHovering ? Infinity : 0,
                  ease: "easeInOut"
                }}
              >
                <span>Get Early Access</span>
                <FiChevronRight />
                
                {isHovering && (
                  <motion.div 
                    className={styles.rocketFlame}
                    animate={{
                      height: [20, 30, 20],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.button>
              
              <AnimatePresence>
                {tMinusVisible && (
                  <motion.div 
                    className={styles.tMinusCount}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {countdown > 0 ? `T-minus ${countdown}...` : 'LAUNCH!'}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className={styles.rocketAnimation}>
              <Lottie animationData={rocketLaunchAnimation} loop={true} />
            </div>
          </motion.div>
          
          {/* Add the countdown timer */}
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
} 