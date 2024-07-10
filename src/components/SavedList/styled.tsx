import styled from "styled-components";
import { pagePadding } from "../../constants/style/commonStyled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;

  ${pagePadding}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.common};

  margin: 0 auto;
  overflow-x: scroll;
`;

export const Card = styled.button`
  display: flex;
  align-items: center;
  padding: 12px;
  color: ${({ theme }) => theme.mode.primaryText};
  border-radius: ${({ theme }) => theme.borderRadius.common};
  border: 1px solid ${({ theme }) => theme.mode.cardBorder};

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

export const Title = styled.h3`
  margin-bottom: 12px;
`;
