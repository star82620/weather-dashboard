import styled from "styled-components";
import { cardWrapper } from "../../../constants/style/commonStyled";
import breakpoint from "../../../constants/style/breakpoint";

export const Wrapper = styled.section`
  width: 100%;
  padding: 24px 32px;

  ${cardWrapper};

  @media (${breakpoint.tablet}) {
    padding: 24px 12px;
  }
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

  width: 100%;
  margin-top: 20px;

  @media (${breakpoint.tablet}) {
    justify-content: center;
    align-items: start;
    gap: 0;
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

  @media (${breakpoint.tablet}) {
    padding: 0;
  }

  @media (${breakpoint.mobile}) {
    flex-direction: row;
  }
`;

export const Temperature = styled.p`
  vertical-align: text-bottom;
  white-space: nowrap;
`;

export const Value = styled.span`
  display: inline-block;
  margin-right: 4px;
`;

export const Max = styled.span`
  display: inline-block;
  font-size: 24px;
  margin-bottom: 20px;

  &::after {
    content: "";
    display: inline-block;
    width: 0;
    height: 32px;
    border-left: 1px solid #ddd;
    transform: rotate(50deg) translate(16px, 10px);

    @media (${breakpoint.tablet}) {
      transform: rotate(50deg) translate(16px, 20px);
    }

    @media (${breakpoint.mobile}) {
      height: 24px;
      transform: rotate(35deg) translate(10px, -8px);
      vertical-align: middle;
    }
  }

  @media (${breakpoint.tablet}) {
    margin-bottom: 12px;
    height: 40px;
  }

  @media (${breakpoint.mobile}) {
    margin: 0 24px 0 0;
  }
`;

export const Min = styled.span`
  font-size: 16px;
  display: inline-block;
  text-align: right;
  vertical-align: bottom;

  @media (${breakpoint.tablet}) {
    display: block;
    margin-left: 16px;
  }

  @media (${breakpoint.mobile}) {
    display: inline-block;
    margin: 0;
    vertical-align: middle;
  }
`;

export const Unit = styled.span`
  vertical-align: bottom;

  @media (${breakpoint.mobile}) {
    vertical-align: middle;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 60px;
  margin: 8px 0 4px 0;
`;

export const Date = styled.p`
  font-weight: 700;
  font-size: 20px;
`;
