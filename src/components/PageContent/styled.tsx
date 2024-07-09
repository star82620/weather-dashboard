import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  color: ${({ theme }) => theme.mode.primaryText};
  background-color: ${({ theme }) => theme.mode.appBg};
`;
