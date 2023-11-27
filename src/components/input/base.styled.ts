import styled from "styled-components";

export const BaseFormControl = styled.div<{ error?: string }>`
  width: 100%;
  position: relative;

  span {
    color: var(--error-red);
    position: absolute;
    right: 1rem;
    top: 2.2rem;
    display: none;
  }

  input {
    border-color: ${(props) => props.error && "#FF4D4F"};
  }
  label {
    color: ${(props) => props.error && "#FF4D4F"};
  }
  p,
  span {
    display: ${(props) => props.error && "block"};
  }
`;

export const BaseInput = styled.input`
  display: block;
  width: 100%;
  padding: 14px 16px;
  font-size: 16px;
  color: var(--dark);
  border-radius: 6px;
  box-shadow: 0px 4px 18px 0px rgba(51, 51, 51, 0.04);
  background-color: var(--light-white);
  border: 1px solid var(--light-gray);

  &::placeholder {
    color: var(--dark);
    opacity: 0.28;
  }
`;

export const BaseLabel = styled.label`
  display: block;
  margin-bottom: 4px;
  font-family: "mulish-medium";
  color: var(--dark);
  font-size: 14px;
`;

export const BaseError = styled.p`
  display: none;
  margin-top: 4px;
  color: #ff4d4f;
`;
