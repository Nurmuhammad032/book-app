import React, { ReactNode } from "react";
import styled from "styled-components";
import { IButtonProps } from "./types";
import { BaseButton } from "./base.styled";

const BlueButton: React.FC<IButtonProps> = ({
  children,
  isLoading,
  icon,
  ...buttonProps
}) => {
  return (
    <Button {...buttonProps} icon>
      {icon && <>{icon}</>}
      {children}
    </Button>
  );
};

const Button = styled(BaseButton)<{ icon: ReactNode | undefined }>`
  background-color: var(--primary-blue);
  color: var(--light-white);
  display: ${(props) => props.icon && "flex"};
  justify-content: center;
  gap: 0 12px;
  align-items: center;

  & > * {
    flex-shrink: 0;
  }
`;

export default BlueButton;
