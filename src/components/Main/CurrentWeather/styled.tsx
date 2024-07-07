import styled, { css } from "styled-components";

const TextAlignCenter = css`
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-content: flex-end;
  flex-wrap: wrap;
  gap: 8px 48px;
  width: 100%;
  padding: 40px;
  /* background-color: ${({ theme }) => theme.colors.grayLight}; */
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  border-radius: ${({ theme }) => theme.borderRadius.common};
`;

export const Content = styled.p`
  font-size: 24px;
`;

export const Title = styled.h4`
  font-size: 14px;
`;

export const Time = styled.div`
  width: 100%;
`;

export const Location = styled.div``;

export const City = styled.p`
  font-size: 32px;
`;

export const Country = styled.p``;

export const Temperature = styled.div`
  ${TextAlignCenter}
  font-size: 24px;
`;

export const Humidity = styled.div`
  ${TextAlignCenter}
`;

export const WindSpeed = styled.div`
  ${TextAlignCenter}
`;
