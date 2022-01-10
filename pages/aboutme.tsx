import PublicLayout from "components/layouts/public.layout";
import type { NextPage } from "next";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import Decorations from "containers/about/decorations";
import homeStyles from "styles/containers/home/Home.module.scss";
import styles from "styles/containers/about/AboutMe.module.scss";
import Image from "next/image";

const AboutMe: NextPage = () => {
  const parallax = useRef<IParallax>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <PublicLayout showFooter={false}>
      <div className={styles.container}>
        <Parallax className={homeStyles.parallax} pages={2} ref={parallax}>
          <Decorations />
          <ParallaxLayer offset={0} speed={1}>
            <div className={styles.introWrap}>
              <div className={styles.intro}>
                <h1>About me</h1>
                <div className={styles.titleUnderline}>
                  <Image
                    src="/svgs/h-zigzag-line.svg"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={1.5}>
            <div className={styles.body}>
              <p>
                My name is James Connor Volpe, <br />
                I'm 22 years old, and in 2021 I got my B.S. in Software
                Engineering.
              </p>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </PublicLayout>
  );
};

export default AboutMe;
