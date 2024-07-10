import styled, { css } from "styled-components";
import {
  cardWrapper,
  cardWrapperActive,
  cardWrapperHover,
} from "../../constants/style/commonStyled";

type IsListOpen = { $isListOpen: boolean };

export const Wrapper = styled.div`
  position: relative;
`;

export const Form = styled.form``;

export const Label = styled.label`
  position: relative;
  &::before {
    content: "🔍";
    position: absolute;
    left: 12px;
    transform: translateY(50%);
  }
`;

export const Input = styled.input`
  display: inline-block;
  padding: 12px 16px 12px 36px;
  color: ${({ theme }) => theme.mode.primaryText};
  ${cardWrapper}
  ${cardWrapperHover}
  

  &:focus {
    ${cardWrapperActive}
  }
  &::placeholder {
    color: ${({ theme }) => theme.mode.thirdText};
  }
`;

// Results
export const ResultWrapper = styled.div<IsListOpen>`
  position: absolute;
  width: 100%;
  display: none;
  flex-direction: column;
  gap: 12px;
  padding: 12px;

  ${cardWrapper}

  ${({ $isListOpen }) =>
    $isListOpen &&
    css`
      display: flex;
    `}
`;

export const ResultItem = styled.div`
  &:hover {
    background-color: #ddd;
  }
`;
