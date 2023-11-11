import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  label?: string;
}

export const Button = ({ children, label, ...props }: Props) => {
  return <button {...props}>{children ? children : label}</button>;
};
