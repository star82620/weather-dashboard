import styled from "styled-components";
import { pagePadding } from "../../constants/style/commonStyled";

export const Wrapper = styled.div`
  /* flex-grow: 1; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  width: 100%;
  padding: 40px;
  ${pagePadding}
`;
