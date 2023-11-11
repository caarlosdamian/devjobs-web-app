import Image from 'next/image';
import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

type UpdatedProps = Props & {
  alt?: Props['icon'] extends undefined ? string : string;
};

export const Input = ({
  icon,
  alt,
  height,
  width,
  className,
  ...props
}: UpdatedProps) => {
  return (
    <div className="flex items-center gap-4">
      {icon && (
        <Image src={icon} alt={alt as string} width={width} height={height} />
      )}
      <input
        className={`text-veryDarkBlue_white outline-none border-none background-white_veryDarkBlue placeholder:opacity-50 ${className}`}
        {...props}
      />
    </div>
  );
};
