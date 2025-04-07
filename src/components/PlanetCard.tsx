'use client';

import { useRef, useEffect, useState } from 'react';
import styles from '../styles/components/PlanetCard.module.scss';

interface PlanetCardProps {
  children: React.ReactNode;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
}

export default function PlanetCard({
  children,
  maxTilt = 10,
  perspective = 1000,
  scale = 1.05
}: PlanetCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isTiltActive, setIsTiltActive] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const cardNode = cardRef.current;
    
    if (cardNode) {
      // Initialize VanillaTilt
      import('vanilla-tilt').then((VanillaTilt) => {
        const tiltOptions = {
          max: maxTilt,
          speed: 400,
          scale,
          perspective,
          glare: true,
          'max-glare': 0.2,
        };
        
        VanillaTilt.default.init(cardNode, tiltOptions);
        setIsTiltActive(true);
        
        // Track mouse position for shine effect
        const handleMouseMove = (e: MouseEvent) => {
          if (!cardNode) return;
          
          const rect = cardNode.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          
          setMousePosition({ x, y });
        };
        
        cardNode.addEventListener('mousemove', handleMouseMove);
        
        // Clean up
        return () => {
          if (cardNode) {
            cardNode.removeEventListener('mousemove', handleMouseMove);
            if ((cardNode as any).vanillaTilt) {
              (cardNode as any).vanillaTilt.destroy();
            }
          }
        };
      });
    }
  }, [maxTilt, perspective, scale]);
  
  return (
    <div 
      ref={cardRef} 
      className={`${styles.planetCard} ${isTiltActive ? styles.tiltActive : ''}`}
    >
      <div className={styles.planetCardInner}>
        {children}
        <div 
          className={styles.planetShine} 
          style={{ 
            top: `${mousePosition.y}%`, 
            left: `${mousePosition.x}%` 
          }}
        />
        <div className={styles.planetGlow} />
      </div>
    </div>
  );
} 