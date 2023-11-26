import React from 'react';

interface Props {
  data: {
    content: string;
    items: string[];
  };
  title: string;
}

const Section = ({ data, title }: Props) => {
  return (
    <div className="flex flex-col gap-7 mt-10">
      <h1 className="text-veryDarkBlue_white h3-bold w-full">{title}</h1>
      <p className="base-normal text-darkGrey">{data.content}</p>
      <div className="flex flex-col gap-2 mt-8">
        {data.items.map((item, index) => (
          <div className="flex items-center gap-7" key={item}>
            <span className="text-primary-violet">{index + 1}</span>
            <span className="base-normal text-darkGrey">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
