import styled from "styled-components";
import {
  cardWrapper,
  cardWrapperActive,
  cardWrapperHover,
} from "../../../constants/style/commonStyled";

export const Wrapper = styled.div``;

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
  width: 100%;
  padding: 12px 16px 12px 36px;
  color: ${({ theme }) => theme.mode.primaryText};
  ${cardWrapper}
  ${cardWrapperHover}

  border-radius: ${({ theme }) => theme.borderRadius.smaller};

  &:focus {
    ${cardWrapperActive}
  }

  &::placeholder {
    color: ${({ theme }) => theme.mode.thirdText};
  }
`;
