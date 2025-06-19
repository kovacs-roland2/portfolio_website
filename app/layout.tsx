import type { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'Roland Kovacs',
  description: 'Roland Kovacs Portfolio Page',
} as const;

interface RootLayoutProps {
  readonly children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <div id="root">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
