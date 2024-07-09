import styled, { css } from "styled-components";

type Unit = {
  $unit: string;
};

export const TemperatureValue = styled.div<Unit>`
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
`;
