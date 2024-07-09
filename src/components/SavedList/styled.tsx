import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 60px;
  background-color: #ddd;
`;

export const Container = styled.div`
  height: 100%;
  max-width: 912px;
  display: flex;
  gap: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.common};
  padding: 8px;
  margin: 0 auto;
  overflow-x: scroll;
`;

export const Location = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.common};

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
