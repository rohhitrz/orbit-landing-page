import React from 'react';
import '../styles/globals.scss';
import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata: Metadata = {
  title: 'Orbit | Home of the Future',
  description: 'A cutting-edge space-tech, metaverse, and AI company pushing the boundaries of what\'s possible.',
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
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 