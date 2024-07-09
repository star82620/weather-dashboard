import styled, { css } from "styled-components";

type IsActive = { $isActive: boolean };

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 4px;
  background: ${({ theme }) => theme.mode.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius.common};
  border: 1px solid ${({ theme }) => theme.mode.cardBorder};
  box-shadow: 0px 0px 1px ${({ theme }) => theme.mode.cardShadow};
`;
export const Button = styled.button<IsActive>`
  min-width: 40px;
  height: 90%;
  color: #aaa;
  border-radius: ${({ theme }) => theme.borderRadius.common};

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${({ theme }) => theme.mode.secondaryText};
      background-color: ${({ theme }) => theme.mode.point};
      box-shadow: 0px 0px 2px ${({ theme }) => theme.mode.cardShadow};
    `}
`;
