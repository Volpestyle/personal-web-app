import styles from "styles/components/ui/button.module.scss";
import { createRef, MouseEvent, ReactNode, useEffect } from "react";
export interface IButton {
  children: ReactNode;
  style?: any;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  newTab?: boolean;
}

export const Button = ({ children, style, onClick, href, newTab }: IButton) => {
  return (
    <div className={styles.container}>
      <a href={href} target={newTab ? "_blank" : "_self"}>
        <button onClick={onClick} style={style}>
          {children}
        </button>
      </a>
    </div>
  );
};
