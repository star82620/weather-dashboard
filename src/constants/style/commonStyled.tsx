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
`;
