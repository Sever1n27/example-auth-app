import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const StyledLink = styled(RouterLink)`
  color: ${(props) => props.theme.colors.main};
`;

type Props = {
  children: React.ReactNode;
  to: string;
};

export function Link(props: Props) {
  return <StyledLink {...props}>{props.children}</StyledLink>;
}
