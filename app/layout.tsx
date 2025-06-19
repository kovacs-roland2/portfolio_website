import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'Roland Kovacs',
  description: 'Roland Kovacs Portfolio Page',
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
