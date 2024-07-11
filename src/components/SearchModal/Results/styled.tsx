import styled from "styled-components";
import breakpoint from "../../../constants/style/breakpoint";

export const ResultItem = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;

  padding: 12px 16px 12px 24px;
  background-color: ${({ theme }) => theme.mode.cardBgHover};
  border: 1px solid ${({ theme }) => theme.mode.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  cursor: pointer;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  vertical-align: middle;
  border-radius: ${({ theme }) => theme.borderRadius.max};

  @media (${breakpoint.mobile}) {
    display: none;
  }
`;

export const ImageMobile = styled.img`
  display: none;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  border-radius: ${({ theme }) => theme.borderRadius.max};

  @media (${breakpoint.mobile}) {
    display: inline-block;
  }
`;

export const Values = styled.div`
  flex: 1;
  max-width: 100%;
  padding-left: 12px;
  padding-right: 20px;
  border-left: 1px solid ${({ theme }) => theme.mode.thirdText};

  @media (${breakpoint.mobile}) {
    padding-left: 0px;
    border-left: none;
  }
`;

export const City = styled.p`
  font-size: 20px;
  width: 100%;

  @media (${breakpoint.mobile}) {
    white-space: wrap;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (${breakpoint.mobile}) {
    margin-top: 8px;
  }
`;

export const Country = styled.span`
  font-size: 16px;
`;

export const GeoValue = styled.span`
  font-size: 14px;
  white-space: nowrap;

  @media (${breakpoint.tablet}) {
    display: block;
  }
`;

export const Save = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;

  position: absolute;
  right: 12px;
  top: 12px;

  width: 24px;
  height: 24px;
  text-align: center;
  vertical-align: middle;
  background-color: ${({ theme }) => theme.mode.maskBg};
  border-radius: ${({ theme }) => theme.borderRadius.max};
  border: 1px solid transparent;

  &:hover {
    background-color: ${({ theme }) => theme.mode.thirdText};
    border: 1px solid ${({ theme }) => theme.mode.cardBorder};
  }
`;
