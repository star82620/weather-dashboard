import styled, { css } from "styled-components";

const TextAlignCenter = css`
  text-align: center;
`;

export const Wrapper = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 60px;
`;

export const CurrentWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-content: flex-end;
  flex-wrap: wrap;
  gap: 8px 48px;
  width: 100%;
  max-width: 912px;
  padding: 40px;
  /* background-color: ${({ theme }) => theme.colors.grayLight}; */
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  border-radius: ${({ theme }) => theme.borderRadius.common};
`;

export const Content = styled.p`
  font-size: 24px;
`;

export const Title = styled.h4`
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

export const Temperature = styled.div`
  ${TextAlignCenter}
  font-size: 24px;
`;

export const Humidity = styled.div`
  ${TextAlignCenter}
`;

export const WindSpeed = styled.div`
  ${TextAlignCenter}
`;

export const Forecast = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px 24px;
  width: 100%;
  max-width: 912px;
  margin-top: 24px;
`;

export const ForecastTitle = styled.h3`
  width: 100%;
  font-size: 24px;
`;

export const DayCard = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  border-radius: ${({ theme }) => theme.borderRadius.common};
`;

export const Image = styled.img``;

export const DateText = styled.p`
  align-self: flex-start;
`;
