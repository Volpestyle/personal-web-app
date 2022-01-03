import styles from "styles/Home.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Powered by{" "}
      <span className={styles.logo}>
        <Image src="/svgs/aws-logo.svg" alt="AWS Logo" width={30} height={30} />
      </span>
    </footer>
  );
};

export default Footer;
