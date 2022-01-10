import styles from "styles/components/footer.module.scss";
import Image from "next/image";
import { useState, MouseEvent, useEffect } from "react";
import { animated, config, useSpring } from "@react-spring/web";

const Footer = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const [spinStyle, spring] = useSpring(() => ({
    rotateZ: 0,
    config: config.gentle,
  }));

  const onMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    setToggle(true);
  };

  useEffect(() => {
    console.log(toggle);
    if (toggle)
      spring.start({
        from: {
          rotateZ: 0,
        },
        to: {
          rotateZ: 360,
        },
        onRest: () => setToggle(false),
      });
  }, [toggle]);

  return (
    <footer className={styles.footer}>
      <div className={styles.pbWrap}>
        <div className={styles.poweredBy} onMouseEnter={onMouseEnter}>
          Powered by{" "}
          <animated.div className={styles.logo} style={spinStyle}>
            <Image
              src="/svgs/aws-logo.svg"
              alt="AWS Logo"
              width={25}
              height={25}
            />
          </animated.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
