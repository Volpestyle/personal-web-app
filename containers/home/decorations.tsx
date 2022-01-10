import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import styles from "styles/containers/home/Decorations.module.scss";

const Decorations = () => {
  return (
    <>
      <ParallaxLayer offset={0} speed={4}>
        <div className={styles.bar1}>
          <Image src="/svgs/dh-zigzag-bar.svg" layout="fill" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={4}>
        <div className={styles.bar2}>
          <Image src="/svgs/dh-l-zigzag-bar.svg" layout="fill" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={3}>
        <div className={styles.pillar1}>
          <Image src="/svgs/dh-pillar-1.svg" layout="fill" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={3}>
        <div
          style={{
            width: "100%",
            height: "100%",
            transform: "scale(.7) translate(65%, 60%)",
          }}
        >
          <Image src="/svgs/dh-l-pillar-1.svg" layout="fill" />
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Decorations;
