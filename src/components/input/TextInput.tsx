import React from "react";
import { IInpurProps } from "./types";
import {
  BaseError,
  BaseFormControl,
  BaseInput,
  BaseLabel,
} from "./base.styled";
import { IconX } from "../icons";

const TextInput: React.FC<IInpurProps> = ({
  name,
  label,
  error,
  ...attributes
}) => {
  return (
    <BaseFormControl error={error}>
      <BaseLabel htmlFor={name}>{label}</BaseLabel>
      <BaseInput
        type="text"
        id={name}
        name={name}
        className={``}
        {...attributes}
      />
      <span>
        <IconX />
      </span>
      <BaseError>{error}</BaseError>
    </BaseFormControl>
  );
};

export default TextInput;
