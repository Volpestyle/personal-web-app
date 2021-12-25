import styles from "../../styles/components/chSpinner.module.scss";
type Props = {
  scale: Number;
  // val in rem
  top: string;
};
export const CHSpinner = ({ scale, top }: Props) => {
  return (
    <iframe
      src={"/chromehearts-spinner.html"}
      className={styles.spinner}
      style={{ transform: `scale(${scale})`, top: `${top}rem` }}
      frameBorder="0"
    />
  );
};
