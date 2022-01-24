import { IButton } from "types/ui";
import styles from "styles/components/ui/button.module.scss";

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
