import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import styles from "styles/containers/about/Decorations.module.scss";
const Decorations = () => {
  return (
    <>
      <ParallaxLayer offset={0} speed={4} style={{ zIndex: 140 }}>
        <div className={styles.bar1}>
          <Image src="/svgs/dh-l-zigzag-bar-2.svg" layout="fill" />
        </div>
      </ParallaxLayer>
      <div className={styles.square3Wrap} style={{ zIndex: 160 }}>
        <ParallaxLayer offset={0} speed={3} style={{ zIndex: 160 }}>
          <div className={styles.square3}>
            <Image src="/svgs/squares/square3/square.svg" layout="fill" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={3.2} style={{ zIndex: 160 }}>
          <div className={styles.square3Inner1}>
            <Image src="/svgs/squares/square3/inner1.svg" layout="fill" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={3.3} style={{ zIndex: 160 }}>
          <div className={styles.square3Inner2}>
            <Image src="/svgs/squares/square3/inner2.svg" layout="fill" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={3.4} style={{ zIndex: 160 }}>
          <div className={styles.square3Inner3}>
            <Image src="/svgs/squares/square3/inner3.svg" layout="fill" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={3.5} style={{ zIndex: 160 }}>
          <div className={styles.square3Inner4}>
            <Image src="/svgs/squares/square3/inner4.svg" layout="fill" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={3.6} style={{ zIndex: 160 }}>
          <div className={styles.square3Inner5}>
            <Image src="/svgs/squares/square3/inner5.svg" layout="fill" />
          </div>
        </ParallaxLayer>
        {/*         <ParallaxLayer offset={0} speed={4}>
          <div className={styles.square4}>
            <Image src="/svgs/squares/square4/square.svg" layout="fill" />
          </div>
        </ParallaxLayer> */}
        <ParallaxLayer offset={0} speed={4} style={{ zIndex: 100 }}>
          <div className={styles.square5Outline}>
            <Image src="/svgs/squares/square5/outline.svg" layout="fill" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={3} style={{ zIndex: 100 }}>
          <div className={styles.square5}>
            <Image src="/svgs/squares/square5/square.svg" layout="fill" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={3} style={{ zIndex: 160 }}>
          <div className={styles.pic1}>
            <div className={styles.pic1Content}>
              <div className={styles.pic1Overlay}></div>
              <Image
                src="/images/me1.png"
                width={3024}
                height={3024}
                placeholder={"blur"}
                blurDataURL="/images/me1-blur.png"
              />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5} style={{ zIndex: 160 }}>
          <div className={styles.square4Outline}>
            <Image src="/svgs/squares/square4/outline.svg" layout="fill" />
          </div>
        </ParallaxLayer>
      </div>
    </>
  );
};

export default Decorations;
