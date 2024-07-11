import styled, { css } from "styled-components";
import breakpoint from "../../constants/style/breakpoint";
import { cardWrapper } from "../../constants/style/commonStyled";
import { IsModalOpen, IsResultListOpen } from "./type";

// Modal
export const Wrapper = styled.div<IsModalOpen>`
  position: fixed;

  display: none;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  height: 100vh;
  padding-top: 60px;
  background-color: ${({ theme }) => theme.mode.maskBg};

  ${({ $isModalOpen }) =>
    $isModalOpen &&
    css`
      display: flex;
    `}
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 0 24px;

  @media (${breakpoint.mobile}) {
    padding: 0 12px;
  }
`;

export const ResultList = styled.div<IsResultListOpen>`
  display: none;
  flex-direction: column;
  gap: 12px;

  margin-top: 20px;
  padding: 12px;

  ${cardWrapper}
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  ${({ $isResultListOpen }) =>
    $isResultListOpen &&
    css`
      display: flex;
    `}
`;

export const Error = styled.p`
  padding: 24px;

  font-size: 20px;
  color: ${({ theme }) => theme.mode.thirdText};
`;
