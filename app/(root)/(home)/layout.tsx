import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/shared/navbar/Navbar';
import '../../globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { SearchContextProvider } from '@/context/SearchContext';
import { ModalRenderer } from '@/components/modal/ModalRenderer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'devjobs',
  description:
    'Welcome to devjobs – your go-to app for discovering exciting opportunities in the world of development! 🚀 Explore a curated list of developer positions and find the perfect match for your skills and ambitions. Stay ahead in your career with devjobs! 🔍💻 #DevJobs #CareerOpportunities #TechTalent #DevelopersCommunity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <SearchContextProvider>
          <body
            className={`${inter.className} background-lightGrey_midnigth flex flex-col items-center w-screen h-full`}
          >
            <ModalRenderer />
            <Navbar />
            {children}
          </body>
        </SearchContextProvider>
      </ThemeProvider>
    </html>
  );
}
