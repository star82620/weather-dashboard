import styled, { css } from "styled-components";

export type TemperatureUnit = {
  $unit: string;
};

export const TemperatureValue = styled.div<TemperatureUnit>`
  ${({ $unit }) =>
    $unit &&
    css`
      &::after {
        content: "${$unit}";
      }
    `}
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  vertical-align: middle;
`;

export const pagePadding = css`
  padding-left: 24px;
  padding-right: 24px;
  max-width: 1024px;
`;

export const cardWrapper = css`
  background-color: ${({ theme }) => theme.mode.cardBg};
  border: 1px solid ${({ theme }) => theme.mode.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius.common};
  box-shadow: 0px 0px 1px ${({ theme }) => theme.mode.cardShadow};
`;
