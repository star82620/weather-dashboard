import styled, { css } from "styled-components";

type IsActive = { $isActive: boolean };

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 4px 8px;
  background: #f0f0f0;
  border-radius: ${({ theme }) => theme.borderRadius.common};
`;
export const Button = styled.button<IsActive>`
  min-width: 40px;
  height: 90%;
  color: #aaa;
  border-radius: ${({ theme }) => theme.borderRadius.common};

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: #fff;
      background-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0px 0px 4px #ddd;
    `}
`;
