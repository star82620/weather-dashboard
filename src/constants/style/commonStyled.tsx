import styled, { css } from "styled-components";
import breakpoint from "./breakpoint";

export const Image = styled.img`
  width: 100%;
  height: auto;
  vertical-align: middle;
`;

export const pagePadding = css`
  padding-left: 40px;
  padding-right: 40px;
  max-width: 1024px;

  @media (${breakpoint.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const cardWrapper = css`
  background-color: ${({ theme }) => theme.mode.cardBg};
  border: 1px solid ${({ theme }) => theme.mode.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius.common};
  box-shadow: 0px 0px 1px ${({ theme }) => theme.mode.cardShadow};
`;
