'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import PlanetCard from './PlanetCard';
import styles from '../styles/components/Testimonials.module.scss';

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            What Explorers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Hear from visionaries who are already experiencing the Orbit advantage
          </motion.p>
        </div>
        
        <motion.div 
          ref={containerRef}
          className={styles.testimonialList}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id} 
              className={styles.cardWrapper}
              variants={itemVariants}
            >
              <PlanetCard>
                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialContent}>
                    <p className={styles.testimonialQuote}>
                      "{testimonial.quote}"
                    </p>
                    <div className={styles.testimonialAuthor}>
                      <div className={styles.avatarWrapper}>
                        <img src={testimonial.avatar} alt={testimonial.name} />
                      </div>
                      <div className={styles.authorInfo}>
                        <h4 className={styles.authorName}>{testimonial.name}</h4>
                        <p className={styles.authorRole}>{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </PlanetCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 