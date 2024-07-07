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
