'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { features } from '../data/features';
import { 
  MdSync, 
  MdPublic 
} from 'react-icons/md';
import { 
  GiBrain, 
  GiCubeforce 
} from 'react-icons/gi';
import styles from '../styles/components/Features.module.scss';

// Map of icon names to components
const iconMap: { [key: string]: React.ReactNode } = {
  MdSync: <MdSync />,
  MdPublic: <MdPublic />,
  GiBrain: <GiBrain />,
  GiCubeforce: <GiCubeforce />,
};

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

function TiltCard({ children, className }: TiltCardProps) {
  const tiltRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tiltNode = tiltRef.current;
    
    if (tiltNode) {
      // Dynamically import VanillaTilt only on client-side
      import('vanilla-tilt').then((VanillaTilt) => {
        const tiltOptions = {
          max: 15,
          speed: 400,
          glare: true,
          'max-glare': 0.3,
          scale: 1.05
        };
        
        VanillaTilt.default.init(tiltNode, tiltOptions);
        
        // Clean up
        return () => {
          if (tiltNode && 'vanillaTilt' in tiltNode) {
            (tiltNode as { vanillaTilt: { destroy: () => void } }).vanillaTilt.destroy();
          }
        };
      });
    }
  }, []);
  
  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
}

export default function Features() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <section id="features" className={styles.features}>
      <div className={styles.backgroundDecoration}></div>
      
      <div className={styles.container}>
        <div className={styles.heading}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            Cosmic Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Discover how Orbit&apos;s technology is revolutionizing the future of space and AI interaction.
          </motion.p>
        </div>
        
        <motion.div 
          className={styles.featureGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id} 
              className={styles.cardWrapper}
              variants={itemVariants}
            >
              <TiltCard className={styles.featureCard}>
                <div className={styles.iconWrapper}>
                  {iconMap[feature.icon]}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 