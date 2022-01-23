import { ReactNode } from "react";

export interface IButton {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  newTab?: boolean;
}
