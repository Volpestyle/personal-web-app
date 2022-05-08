import React, { ChangeEvent, useState } from "react";

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChange }: InputProps) => {
  return <input onChange={onChange} value={value} />;
};

export default Input;
