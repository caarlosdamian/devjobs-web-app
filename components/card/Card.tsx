import { JobInfo } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  job: JobInfo;
  className?: string;
}

export const Card = ({
  job: {
    company,
    position,
    contract,
    postedAt,
    location,
    logo,
    logoBackground,
    id,
  },
  className,
}: Props) => {
  return (
    <Link
      href={`/${id}`}
      className={`relative w-full h-full background-white_veryDarkBlue rounded-md py-9 px-8 flex flex-col gap-11  lg:max-w-[428px] ${className}`}
    >
      <div
        className={`flex items-center justify-center h-[50px] w-[50px] rounded-xl  absolute top-[-24px] left-[32px]`}
        style={{ background: logoBackground }}
      >
        <Image
          src={logo}
          alt="logo-brand"
          width={0}
          height={0}
          style={{ width: 'auto', height: 'auto', objectFit: 'contain' }}
        />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center gap-3">
          <span className="base text-darkGrey">{postedAt}</span>
          <div className="rounded-[50%] h-1 w-1 bg-secondary-darkGrey"></div>
          <span className="base text-darkGrey">{contract}</span>
        </div>
        <h1 className="text-veryDarkBlue_white h3-bold w-full">{position}</h1>
        <span className="base text-darkGrey">{company}</span>
      </div>
      <div className="">
        <span className="text-primary-violet base-bold">{location}</span>
      </div>
    </Link>
  );
};
