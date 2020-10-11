import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  return (
    <div><CustomInput value={text} onChange={handleChange}>Input:</CustomInput>
      <p>You typed: {text ?? '...'}</p>
    </div>
  );
};

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

export default App;
