import React from "react";
import styled from "styled-components";
import { IButtonProps } from "./types";
import { BaseButton } from "./base.styled";

const BlueButton: React.FC<IButtonProps> = ({
  children,
  isLoading,
  ...buttonProps
}) => {
  return <Button {...buttonProps}>{children}</Button>;
};

const Button = styled(BaseButton)`
  background-color: var(--dark-white);
  color: var(--primary-blue);
  border: 1px solid var(--primary-blue);
`;

export default BlueButton;
