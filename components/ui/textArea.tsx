import React, { ChangeEvent } from "react";

interface TextAreaProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ value, onChange }: TextAreaProps) => {
  return <textarea onChange={onChange} value={value} />;
};

export default TextArea;
