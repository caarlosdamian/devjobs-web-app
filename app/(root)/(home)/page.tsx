'use client';
import { Card } from '@/components/card/Card';
import { DesktopSearch } from '@/components/search/desktopSearch/DesktopSearch';
import { MobileSearch } from '@/components/search/mobileSearch/MobileSearch';
import { useSearchContext } from '@/context/SearchContext';
import { useWidth } from '@/hooks/useMobile';
import { useSearch } from '@/hooks/useSearch';

export default function Home() {
  const { isMobile } = useWidth();
  const {
    state: { data },
  } = useSearchContext();
  return (
    <main className="relative">
      {isMobile ? <MobileSearch /> : <DesktopSearch />}
      <div className="flex flex-col items-center gap-[49px] mt-[72px] w-screen h-full pb-16 px-6 md:flex-row md:flex-wrap md:px-10 md:mt-28 lg:px-[165px] md:gap-x-3 md:gap-y-16 md:justify-center lg:gap-x-8">
        {data.map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
}
