import styled from "styled-components";
import { cardWrapper, pagePadding } from "../../constants/style/commonStyled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  gap: 24px;
  width: 100%;
  padding: 24px;
  ${pagePadding}
`;

export const SearchButton = styled.button`
  padding: 0 8px;
  ${cardWrapper}
`;
