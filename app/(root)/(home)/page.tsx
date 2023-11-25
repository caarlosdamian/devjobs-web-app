'use client';
import { Card } from '@/components/card/Card';
import { DesktopSearch } from '@/components/search/desktopSearch/DesktopSearch';
import { MobileSearch } from '@/components/search/mobileSearch/MobileSearch';
import { useSearchContext } from '@/context/SearchContext';

export default function Home() {
  const {
    state: { data },
  } = useSearchContext();
  return (
    <main className="relative">
      <div
        className="absolute right-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 p-6 xl:px-[165px] 
            w-screen flex items-center justify-center"
      >
        <MobileSearch /> <DesktopSearch />
      </div>
      <div className="flex flex-col items-center gap-[49px] mt-[72px] w-screen h-full pb-16 px-6 md:flex-row md:flex-wrap md:px-10 md:mt-28 lg:px-[165px] md:gap-x-3 md:gap-y-16 md:justify-center lg:gap-x-8">
        {data.map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
}
