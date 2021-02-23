import React from "react";
import styled from "styled-components";

type InputProps = {
  error?: boolean;
};

const StyledInput = styled.input<InputProps>`
  border: ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0.4rem 1rem;
  background: ${(props) => props.theme.background};
  transition: ${(props) => props.theme.transition};
  display: block;
  border-color: ${(props) =>
    props.error ? props.theme.colors.error : props.theme.colors.secondary};
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
`;

type Props = {
  type?: "text" | "number" | "password";
  required?: boolean;
  onChange?: (value: any) => void;
  error?: boolean;
  name: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  value?: any;
};

export function Input(props: Props) {
  return (
    <Label>
      {props.label}
      <StyledInput {...props} />
    </Label>
  );
}
