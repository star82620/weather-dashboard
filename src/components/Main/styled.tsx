import styled from "styled-components";

export const Wrapper = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  max-width: 912px;
  margin: 0 auto;
  padding: 60px;
`;

export const Forecast = styled.section`
  width: 100%;
  margin-top: 24px;
`;

export const ForecastTitle = styled.h3`
  width: 100%;
  font-size: 24px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px 24px;
`;

export const DayCard = styled.div`
  flex: 1 1 30%;
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
