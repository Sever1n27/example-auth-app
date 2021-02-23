import React from "react";
import styled from "styled-components";

type ButtonProps = {
  variant?: string;
};

const StyledButton = styled.button<ButtonProps>`
  display: block;
  padding: 0.4rem 1rem;
  text-align: center;
  background-color: ${(props) =>
    props.variant === "secondary"
      ? props.theme.background
      : props.theme.colors.neutral};
  color: ${(props) => props.theme.colors.main};
  border-radius: ${(props) => props.theme.borderRadius};
  border: ${(props) => props.theme.border};
  transition: ${(props) => props.theme.transition};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  -webkit-appearance: button;
  text-transform: uppercase;
  &:hover {
    background-color: ${(props) =>
      props.variant === "secondary"
        ? props.theme.colors.error
        : props.theme.colors.success};
  }
`;

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type: "submit" | "button" | "reset";
  variant?: "primary" | "secondary";
};

export function Button(props: Props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}
