'use client';
import { DesktopSearch } from '@/components/search/desktopSearch/DesktopSearch';
import { MobileSearch } from '@/components/search/mobileSearch/MobileSearch';
import { useWidth } from '@/hooks/useMobile';

export default function Home() {
  const { isMobile } = useWidth();
  return (
    <main className="relative">
      {isMobile ? <MobileSearch /> : <DesktopSearch />}
    </main>
  );
}
