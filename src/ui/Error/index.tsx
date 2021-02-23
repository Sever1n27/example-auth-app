import React from "react";
import styled from "styled-components";

const Error = styled.span`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.error};
  position: absolute;
  bottom: 0.5rem;
  left: 1rem;
`;

type Props = {
  children: React.ReactNode;
};

export function ErrorMessage(props: Props) {
  return <Error>{props.children}</Error>;
}
