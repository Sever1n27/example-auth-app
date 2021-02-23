import React from "react";
import styled from "styled-components";

const Checkmark = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  height: 25px;
  width: 25px;
  background-color: ${(props) => props.theme.background};
  border: ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.borderRadius};
  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 8px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  &:checked ~ ${Checkmark} {
    background-color: ${(props) => props.theme.colors.neutral};
    &:after {
      display: block;
    }
  }
  &:focus ~ ${Checkmark} {
    border-color: ${(props) => props.theme.colors.neutral};
  }
`;

const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 1rem;
  cursor: pointer;
  user-select: none;
  font-size: 1rem;
  &:hover {
    ${Checkmark} {
      background-color: #ccc;
    }
  }
`;

type Props = {
  onChange?: (value: any) => void;
  name: string;
  label: string;
  readOnly?: boolean;
  checked: boolean;
};

export function Checkbox(props: Props) {
  return (
    <Label>
      {props.label}
      <StyledInput type="checkbox" {...props} />
      <Checkmark />
    </Label>
  );
}
