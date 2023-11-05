import React from 'react';

interface Props {
  mobile: string;
  desktop: string;
  tablet: string;
  alt: string;
  className?: string;
}

export const ResponsiveImg = ({
  alt,
  mobile,
  desktop,
  tablet,
  className,
}: Props) => {
  return (
    <picture>
      <source srcSet={desktop} media="(min-width: 800px)" />
      <source srcSet={tablet} media="(min-width: 460px)" />
      <source srcSet={mobile} media="(min-width: 450px)" />
      <img src={mobile} alt={alt} className={`${className}`} />
    </picture>
  );
};
