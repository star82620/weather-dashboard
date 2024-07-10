import styled from "styled-components";
import { pagePadding } from "../../constants/style/commonStyled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;

  ${pagePadding}
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.common};

  margin: 0 auto;
  overflow-x: scroll;
`;

export const Card = styled.button`
  display: flex;
  align-items: center;
  width: 150px;
  height: 150px;
  padding: 8px;
  color: ${({ theme }) => theme.mode.primaryText};
  border-radius: ${({ theme }) => theme.borderRadius.common};
  border: 1px solid ${({ theme }) => theme.mode.cardBorder};
  /* background-color: ${({ theme }) => theme.mode.cardBg}; */
  /* box-shadow: 0px 0px 1px ${({ theme }) => theme.mode.cardShadow}; */

  &:hover {
    border: 1px solid ${({ theme }) => theme.mode.cardBorderHover};
    background-color: ${({ theme }) => theme.mode.cardBgHover};
  }
`;

export const Image = styled.img`
  width: 20px;
  height: 20px;
`;

export const Text = styled.span`
  margin-left: 4px;
`;
