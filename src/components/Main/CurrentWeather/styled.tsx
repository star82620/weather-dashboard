import styled from "styled-components";
import { cardWrapper } from "../../../constants/style/commonStyled";
import breakpoint from "../../../constants/style/breakpoint";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: flex-end;
  gap: 40px;
  width: 100%;
  padding: 20px 40px 20px 20px;

  ${cardWrapper}

  @media (${breakpoint.tablet}) {
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 40px;
    padding-right: 20px;
    gap: 24px;
  }

  @media (${breakpoint.mobile}) {
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    gap: 36px;
  }
`;

export const Time = styled.div`
  width: 100%;
`;

export const Location = styled.div`
  text-align: left;

  @media (${breakpoint.mobile}) {
    text-align: center;
  }
`;

export const ValueContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  gap: 32px;

  @media (${breakpoint.tablet}) {
    justify-content: center;
  }

  @media (${breakpoint.mobile}) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const TextContainer = styled.div`
  text-align: center;
  font-size: 32px;
`;

export const Content = styled.p`
  font-size: 32px;

  @media (${breakpoint.tablet}) {
    text-align: center;
  }
`;

export const Unit = styled.span`
  font-size: 16px;
  margin-left: 4px;
`;

export const Title = styled.h4`
  font-size: 16px;
  margin-top: 8px;
  font-weight: 400;

  @media (${breakpoint.tablet}) {
    text-align: center;
  }

  @media (${breakpoint.mobile}) {
    font-size: 18px;
    margin-top: 0px;
  }
`;

export const WeatherIcon = styled.div`
  flex-shrink: 0;
`;
