import React from 'react';

interface CustomInputProps {
  children: React.ReactNode,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value: string
}

export const CustomInput = ({ children, value, onChange }: CustomInputProps) => {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input placeholder="Example Text" id="search" value={value} onChange={onChange} />
    </div>
  );

}
