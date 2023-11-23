'use client';
import React from 'react';

interface Props {
  children: React.ReactNode;
  handleClosed: () => void;
}

const Wrapper = ({ children, handleClosed }: Props) => {
  return (
    <div>
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-[0.4965] z-10"
        onClick={handleClosed}
      ></div>
      {children}
    </div>
  );
};

export default Wrapper;
