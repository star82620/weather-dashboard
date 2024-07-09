import styled from "styled-components";
import { pagePadding } from "../../constants/style/commonStyled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: #ddd;
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

export const Location = styled.button`
  display: flex;
  align-items: center;
  width: 150px;
  height: 150px;
  padding: 8px;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.common};
  background-color: #f4f4f4;

  &:hover {
    border: 1px solid #f0f0f0;
    background-color: #f4f4f4;
  }
`;

export const Image = styled.img`
  width: 20px;
  height: 20px;
`;

export const Text = styled.span`
  margin-left: 4px;
`;
