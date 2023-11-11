import { useEffect, useState } from 'react';

export const useWidth = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 480);

  const handleResize = () => setIsMobile(window.innerWidth <= 480);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return {
    isMobile,
  };
};
