import styled from "styled-components";
import { cardWrapper } from "../../../constants/style/commonStyled";
import breakpoint from "../../../constants/style/breakpoint";

export const Wrapper = styled.section`
  width: 100%;
`;

export const ForecastTitle = styled.h3`
  width: 100%;
  font-size: 32px;

  @media (${breakpoint.tablet}) {
    text-align: center;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px 24px;
  width: 100%;
  margin-top: 12px;

  @media (${breakpoint.tablet}) {
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    gap: 16px 12px;
  }

  @media (${breakpoint.mobile}) {
    flex-direction: column;
  }
`;

export const DayCard = styled.div`
  flex: 0 1 30%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  padding: 16px;
  width: 100%;

  ${cardWrapper}

  @media (${breakpoint.mobile}) {
    flex-direction: row;
    padding: 4px 12px 4px 0;
  }
`;

export const Temperature = styled.p`
  vertical-align: text-bottom;
  white-space: nowrap;
`;

export const Value = styled.span`
  display: inline-block;
  /* font-size: 20px; */
  margin-right: 8px;
`;

export const ImageWrapper = styled.div`
  max-width: 60px;
`;

export const Date = styled.p``;
