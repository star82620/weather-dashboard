import styled from "styled-components";
import {
  cardWrapper,
  cardWrapperActive,
  cardWrapperHover,
  pagePadding,
} from "../../constants/style/commonStyled";
import breakpoint from "../../constants/style/breakpoint";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 24px;
  width: 100%;

  padding: 12px 24px;

  ${pagePadding}

  @media (${breakpoint.tablet}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.mode.point};
`;
export const Image = styled.img`
  width: 32px;
  height: auto;
  margin-right: 8px;
`;

export const Container = styled.div`
  display: flex;
  gap: 24px;
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
