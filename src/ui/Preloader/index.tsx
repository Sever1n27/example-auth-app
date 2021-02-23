import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const bounced = keyframes`
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1.0); }
`;

type DotProps = {
  delay?: string;
};

const Dot = styled.div<DotProps>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.theme.colors.neutral};
  border-radius: 100%;
  display: inline-block;
  animation: ${bounced} 1.4s infinite ease-in-out both;
  animation-delay: ${(props) => props.delay || "0s"};
  & + & {
    margin-left: 1rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  background: rgba(255, 255, 255, 0.4);
`;

type Props = {
  loading: boolean;
};

export function Preloader(props: Props) {
  const [visible, setVisible] = React.useState<boolean>(false);
  const timeoutRef = React.useRef(0);
  const visibilityDelay = 200;
  useEffect(() => {
    if (props.loading) {
      timeoutRef.current = window.setTimeout(
        () => setVisible(true),
        visibilityDelay
      );
    } else {
      clearTimeout(timeoutRef.current);
      setVisible(false);
    }
  }, [props.loading]);

  return visible ? (
    <Container>
      <Dot delay="-0.32s" />
      <Dot delay="-0.16s" />
      <Dot />
    </Container>
  ) : null;
}
