import Image from 'next/image';
import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  alt?: string;
}

type UpdatedProps = Props & {
  alt?: Props['icon'] extends undefined ? string : string;
};

export const Input = ({ icon, alt, ...props }: UpdatedProps) => {
  return (
    <div className="">
      {icon && <Image src={icon} alt={alt as string} width={24} height={24} />}
      <input
        className="text-veryDarkBlue_white  outline-none border-none background-white_veryDarkBlue placeholder:opacity-50"
        {...props}
      />
    </div>
  );
};
