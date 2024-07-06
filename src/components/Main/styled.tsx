import styled, { css } from "styled-components";

type Unit = {
  $unit: string;
};

const TextAlignCenter = css`
  text-align: center;
`;

export const Wrapper = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 12px;
`;

export const CurrentWeather = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  align-content: flex-end;
  flex-wrap: wrap;
  gap: 8px 48px;
  width: 100%;
  max-width: 912px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.grayLight};
  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.common};
`;

export const Content = styled.p`
  font-size: 24px;
`;

export const Title = styled.h3`
  font-size: 14px;
`;

export const Time = styled.div`
  width: 100%;
`;

export const Location = styled.div``;

export const City = styled.p`
  font-size: 32px;
`;

export const Country = styled.p``;

export const Temperature = styled.div<Unit>`
  ${TextAlignCenter}

  ${({ $unit }) =>
    $unit &&
    css`
      ${Content}::after {
        content: "${$unit}";
      }
    `}
`;

export const Humidity = styled.div`
  ${TextAlignCenter}
`;

export const WindSpeed = styled.div`
  ${TextAlignCenter}
`;
