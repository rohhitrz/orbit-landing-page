import React from 'react';
import '../styles/globals.scss';
import type { Metadata, Viewport } from 'next';

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
} 