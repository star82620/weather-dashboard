import styled from "styled-components";
import { pagePadding } from "../../constants/style/commonStyled";

export const Wrapper = styled.main`
  /* flex-grow: 1; */
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  ${pagePadding}
`;

export const Forecast = styled.section`
  width: 100%;
  margin-top: 24px;
  /* border: 1px solid #333; */
  border-radius: ${({ theme }) => theme.borderRadius.common};
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
`;

export const CardContainer = styled.div`
  flex: 1 1 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  max-width: 60px;
`;

export const DateText = styled.p``;
