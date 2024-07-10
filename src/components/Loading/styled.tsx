import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
`;

export const Loader = styled.div`
  width: 50px;
  padding: 8px;
  margin: 0 auto;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${({ theme }) => theme.mode.point};
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: rotate 1s infinite linear;

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
`;
