import React from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import { IButtonProps } from "./types";
import { BaseButton } from "./base.styled";

const BlueButton: React.FC<IButtonProps> = ({
  children,
  isLoading,
  icon,
  ...buttonProps
}) => {
  return (
    <Button {...buttonProps} disabled={isLoading}>
      {isLoading ? (
        <CircularProgress color="inherit" size={"20px"} />
      ) : (
        <>
          {icon && <>{icon}</>}
          {children}
        </>
      )}
    </Button>
  );
};

const Button = styled(BaseButton)`
  background-color: var(--primary-blue);
  color: var(--light-white);
  display: flex;
  justify-content: center;
  gap: 0 12px;
  align-items: center;

  &:disabled {
    opacity: 0.5;
    user-select: none;
    pointer-events: none;
  }

  & > * {
    flex-shrink: 0;
  }
`;

export default BlueButton;
