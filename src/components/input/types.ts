import { InputHTMLAttributes } from "react";

export interface IInpurProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error: string;
}
