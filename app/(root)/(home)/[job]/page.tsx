'use client';
import Section from '@/components/section/Section';
import { Button } from '@/components/shared/button/Button';
import { useSearchContext } from '@/context/SearchContext';
import { JobInfo } from '@/types';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';

const Job = () => {
  const { job } = useParams();
  const {
    state: { data },
  } = useSearchContext();
  const jobInfo: JobInfo = useMemo(
    () => data.filter((item) => item.id === Number(job))[0],
    [job, data]
  );
  const {
    logoBackground,
    company,
    logo,
    postedAt,
    contract,
    position,
    location,
    description,
    requirements,
    role,
  } = jobInfo;
  return (
    <div className="background-lightGrey_midnigth w-screen flex flex-col items-center h-screen relative pt-[214px]  mb-16">
      {/* Section one */}
      <div
        className="w-[327px] background-white_veryDarkBlue absolute top-[-15px] h-[205px] left-2/4
      py-8 rounded-md 
      flex flex-col items-center gap-6 
      transform -translate-x-1/2 right-2/4 
      sm:w-[689px] sm:flex-row sm:h-[140px] sm:py-0 sm:gap-10 sm:pr-10 lg:w-[730px]"
      >
        <div
          className={`flex items-center justify-center h-[50px] w-[50px] rounded-md sm:rounded-r-none  absolute top-[-24px] sm:w-[140px] sm:h-[140px] sm:relative sm:top-0`}
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
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-veryDarkBlue_white h3-bold">{company}</h1>
          <span className="base text-darkGrey">
            {company.toLowerCase()}.com
          </span>
        </div>
        <div className="sm:flex-1 flex justify-end">
          <Button
            label="Company Site"
            className="btn-secondary p-4 text-primary-violet"
          />
        </div>
      </div>
      {/* Section two */}
      <div className="background-white_veryDarkBlue w-full max-w-[327px] rounded-md px-6 py-10 mb-16 sm:max-w-[689px] sm:px-12 lg:max-w-[730px]">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center gap-3">
              <span className="base text-darkGrey">{postedAt}</span>
              <div className="rounded-[50%] h-1 w-1 bg-secondary-darkGrey"></div>
              <span className="base text-darkGrey">{contract}</span>
            </div>
            <h1 className="text-veryDarkBlue_white h3-bold w-full">
              {position}
            </h1>
            <span className="text-primary-violet base-bold">{location}</span>
          </div>
          <Button label="Apply Now" className="btn text-white p-4 w-full mt-14 sm:mt-0 sm:max-w-[140px]" />
        </div>
     
        <p className="base-normal text-darkGrey mt-8">{description}</p>
        <Section data={requirements} title="Requirements" />
        <Section data={role} title="What You Will Do" />
      </div>
      {/* Section three */}
      <div className="min-h-[96px] w-full background-white_veryDarkBlue p-6 flex items-center justify-between sm:p-10 lg:px-[165px] lg:justify-around lg:gap-0">
        <div className="hidden sm:flex flex-col gap-3">
        <h1 className="text-veryDarkBlue_white h3-bold">{company}</h1>
          <span className="base text-darkGrey">
            {company.toLowerCase()}.com
          </span>
        </div>
        <Button label="Apply Now" className="btn p-4 text-white w-full sm:max-w-[140px]" />
      </div>
    </div>
  );
};

export default Job;
