import styled from "styled-components";
import { cardWrapper } from "../../constants/style/commonStyled";

// Modal
export const Wrapper = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  height: 100vh;
  padding-top: 60px;
  background-color: ${({ theme }) => theme.mode.maskBg};
`;

export const Modal = styled.div`
  width: 500px;
`;

// ResultList
export const ResultList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 20px;
  padding: 12px;

  ${cardWrapper}
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

export const ResultItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;

  padding: 12px 24px;
  background-color: ${({ theme }) => theme.mode.cardBgHover};
  border: 1px solid ${({ theme }) => theme.mode.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  vertical-align: middle;
  border-radius: ${({ theme }) => theme.borderRadius.max};
`;
export const Location = styled.div`
  flex: 1;
`;
export const City = styled.p`
  font-size: 20px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const Country = styled.span`
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const Values = styled.div`
  flex: 1;
  padding-left: 12px;
  border-left: 1px solid ${({ theme }) => theme.mode.thirdText};
`;
export const GeoValue = styled.span`
  font-size: 14px;
  margin-left: 8px;
`;

export const Save = styled.div`
  text-align: center;
`;
export const Desc = styled.p`
  font-size: 12px;
`;
