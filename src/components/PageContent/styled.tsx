import styled, { css } from "styled-components";

type StopScroll = {
  $stopScroll: boolean;
};

export const Wrapper = styled.main<StopScroll>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin: 0 auto;
  color: ${({ theme }) => theme.mode.primaryText};

  ${({ $stopScroll }) =>
    $stopScroll &&
    css`
      max-height: 100vh;
      overflow: hidden;
    `}
`;
