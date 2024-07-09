import styled from "styled-components";
import { cardWrapper, pagePadding } from "../../constants/style/commonStyled";

export const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  ${pagePadding}
`;

export const Forecast = styled.section`
  width: 100%;
`;

export const ForecastTitle = styled.h3`
  width: 100%;
  font-size: 24px;
`;

export const CardsWrapper = styled.div`
  display: flex;

  justify-content: space-between;
  gap: 12px 24px;
  width: 100%;
  margin-top: 12px;
`;

export const CardContainer = styled.div`
  flex: 1 1 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 24px;
`;

export const DayCard = styled.div`
  width: 100%;

  ${cardWrapper}
`;

export const Temperature = styled.p``;

export const Unit = styled.span``;

export const ImageWrapper = styled.div`
  max-width: 60px;
`;

export const DateText = styled.p``;
