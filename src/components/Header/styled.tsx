import styled from "styled-components";
import {
  cardWrapper,
  cardWrapperActive,
  cardWrapperHover,
  pagePadding,
} from "../../constants/style/commonStyled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  gap: 24px;
  width: 100%;

  padding: 12px 24px;

  ${pagePadding}
`;

export const SearchButton = styled.button`
  padding: 10px 12px;
  font-size: 14px;
  color: ${({ theme }) => theme.mode.thirdText};

  ${cardWrapper};
  ${cardWrapperHover}

  &:active {
    ${cardWrapperActive}
  }
`;
