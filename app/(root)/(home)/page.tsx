'use client';
import { Card } from '@/components/card/Card';
import { DesktopSearch } from '@/components/search/desktopSearch/DesktopSearch';
import { MobileSearch } from '@/components/search/mobileSearch/MobileSearch';
import { Button } from '@/components/shared/button/Button';
import { useSearchContext } from '@/context/SearchContext';
import { useEffect, useMemo, useState } from 'react';

export default function Home() {
  const {
    state: { data },
  } = useSearchContext();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(false);
  }, [data]);

  return (
    <main className="relative pb-16">
      <div
        className="absolute right-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 p-6 xl:px-[165px] 
            w-screen flex items-center justify-center"
      >
        <MobileSearch /> <DesktopSearch />
      </div>
      <div className="flex flex-col items-center gap-[49px] mt-[72px] w-screen h-full pb-16 px-6 md:flex-row md:flex-wrap md:px-10 md:mt-28 lg:px-[165px] md:gap-x-3 md:gap-y-16 md:justify-center lg:gap-x-8">
        {data.map((job, index) => (
          <Card
            key={job.id}
            job={job}
            className={`${index > 11 && !load && 'hidden'}`}
          />
        ))}
      </div>
      {!load && data.length > 11 && (
        <div className="flex items-center justify-center w-full">
          <Button
            label="Load More"
            className="btn p-4 !hover:bg-primary-lightViolet text-white"
            onClick={() => setLoad(true)}
          />
        </div>
      )}
    </main>
  );
}
