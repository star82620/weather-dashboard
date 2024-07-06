import styled from "styled-components";

export const Wrapper = styled.div``;

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
