import { createRef, MouseEventHandler, ReactNode, useEffect } from "react";
import styles from "../../styles/components/button.module.scss";
type ButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
};

export const Button = ({ children, onClick, icon }: ButtonProps) => {
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    ref.current!.onclick = clickAnim;
  });

  const clickAnim = (e: any) => {
    const circle = document.createElement("div");
    circle.className = styles.btn_animation;
    ref.current!.appendChild(circle);
    circle.style.position = "fixed";
    circle.style.left = `${e.pageX}px`;
    circle.style.top = `${e.pageY}px`;
    circle.style.width = "1px";
    circle.style.height = "1px";
    circle.animate([{ transform: "scale(1)" }, { transform: "scale(250)" }], {
      duration: 300,
      iterations: 1,
      easing: "ease-out",
    });
    circle.animate([{ opacity: "100%" }, { opacity: "0%" }], {
      duration: 300,
      iterations: 1,
      easing: "ease-in",
    });
    setTimeout(() => {
      circle.remove();
    }, 600);
  };

  return (
    <div className={styles.container}>
      <button onClick={onClick} className={styles.button}>
        <div className={styles.btn_anim_container} ref={ref}></div>
        {children}
        {icon}
      </button>
    </div>
  );
};
