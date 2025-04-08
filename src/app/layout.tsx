import React from 'react';
import '../styles/globals.scss';
import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata: Metadata = {
  title: 'Orbit – Explore Beyond Limits',
  description: 'A cinematic, 3D-inspired landing page for the future of AI and design.',
  keywords: 'space, orbit, AI, metaverse, future, technology',
  authors: [{ name: 'Orbit Labs' }],
  openGraph: {
    title: 'Orbit – Explore Beyond Limits',
    description: 'A cinematic, 3D-inspired landing page for the future of AI and design.',
    url: 'https://orbit-space.com',
    siteName: 'Orbit',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Orbit – Explore Beyond Limits',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function getThemePreference() {
                if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                  return localStorage.getItem('theme');
                }
                return 'dark'; // Always default to dark
              }
              document.documentElement.setAttribute('data-theme', getThemePreference());
            })();
          `
        }} />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪐</text></svg>" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 