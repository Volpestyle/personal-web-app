import { IButton } from "types/ui";
import styles from "styles/components/ui/button.module.scss";

export const Button = ({ children, onClick, href, newTab }: IButton) => {
  return (
    <div className={styles.container}>
      <a href={href} target={newTab ? "_blank" : "_self"}>
        <button onClick={onClick}>{children}</button>
      </a>
    </div>
  );
};
