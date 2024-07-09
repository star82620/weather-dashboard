import styled from "styled-components";
import { cardWrapper } from "../../../constants/style/commonStyled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: flex-end;
  gap: 8px 48px;
  width: 100%;
  padding: 20px 40px 20px 20px;

  ${cardWrapper}
`;

export const Time = styled.div`
  width: 100%;
`;

export const Location = styled.div`
  text-align: left;
`;

export const TextContainer = styled.div`
  text-align: center;
  font-size: 32px;
`;

export const Content = styled.p`
  font-size: 32px;
`;

export const Unit = styled.span`
  font-size: 16px;
  margin-left: 4px;
`;

export const Title = styled.h4`
  font-size: 16px;
  margin-top: 8px;
  font-weight: 400;
`;

export const WeatherIcon = styled.div`
  flex-shrink: 0;
`;
