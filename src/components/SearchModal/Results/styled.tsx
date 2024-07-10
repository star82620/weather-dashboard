import styled from "styled-components";
import breakpoint from "../../../constants/style/breakpoint";

export const ResultItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;

  padding: 12px 16px 12px 24px;
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

export const Values = styled.div`
  flex: 1;
  padding-left: 12px;
  border-left: 1px solid ${({ theme }) => theme.mode.thirdText};
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

export const GeoValue = styled.span`
  font-size: 14px;
  margin-left: 8px;
  white-space: nowrap;

  @media (${breakpoint.tablet}) {
    display: block;
  }
`;

export const Save = styled.button`
  text-align: center;
  align-self: flex-start;
`;
