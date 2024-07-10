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

export const cardWrapperHover = css`
  &:hover {
    background-color: ${({ theme }) => theme.mode.cardBgHover};
    border: 1px solid ${({ theme }) => theme.mode.cardBorderHover};
    box-shadow: 0px 0px 1px ${({ theme }) => theme.mode.cardShadowHover};
  }
`;

export const cardWrapperActive = css`
  background-color: ${({ theme }) => theme.mode.cardBgActive};
  border: 1px solid ${({ theme }) => theme.mode.cardBorderActive};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.mode.cardShadowActive};
`;
