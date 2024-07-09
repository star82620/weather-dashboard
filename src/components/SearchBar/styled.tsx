import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Form = styled.form`
  width: fit-content;
`;

export const Label = styled.label`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 12px 16px;
  display: inline-block;

  &::before {
    content: "🔍";
    margin-right: 12px;
  }
`;

export const Input = styled.input`
  &::placeholder {
    color: #ccc;
  }
`;

export const ResultWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  background-color: #fff;
  border: 1px solid #ccc;
`;

export const ResultItem = styled.div`
  &:hover {
    background-color: #ddd;
  }
`;
