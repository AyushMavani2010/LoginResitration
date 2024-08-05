import React, { FC } from "react";
import styled from "@emotion/styled";

interface InputProps {
  onChange: (value: string) => void;
  color?: string | undefined;
  height: string | number;
  width: string | number;
  placeholder: string;
  value: string;
}
const INput = styled.input({
  fontSize: "16px",
  fontWeight: 400,
  border: "none",
  outline: "none",
  backgroundColor: "rgba(240, 237, 255, 0.8)",

  marginRight: "10px",
});
const Input: FC<InputProps> = ({
  height,
  onChange,
  value,
  width,
  color,
  placeholder,
}) => {
  return (
    <INput
      onChange={(event) => onChange(event.target.value)}
      type="text"
      style={{ color: color, width: width, height: height }}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
