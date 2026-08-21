import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AI Productivity Assistant',
  description: 'AI-powered workplace productivity assistant with email generation, meeting notes, task planning, research, and chatbot features',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#4f46e5" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
