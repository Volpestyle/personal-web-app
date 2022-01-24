import React, { ReactNode } from "react";

export interface IButton {
  children: ReactNode;
  style?: any;
  onClick?: () => void;
  href?: string;
  newTab?: boolean;
}
