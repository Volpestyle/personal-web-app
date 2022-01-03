import DownArrow from "components/ui/downArrow";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import PublicLayout from "../components/layouts/public.layout";
import styles from "../styles/Home.module.scss";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "components/footer";
import { useRef } from "react";
import Decorations from "containers/home/decorations";

const Home: NextPage = () => {
  const parallax = useRef<IParallax>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <PublicLayout>
      <div className={styles.container}>
        <Head>
          <title>jcvolpe</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Parallax
          className={styles.parallax}
          pages={2}
          style={{
            position: "relative",
            minHeight: "100vh",
          }}
          ref={parallax}
        >
          {/* Shapes, lines etc. */}
          <Decorations />
          {/* Content */}
          <ParallaxLayer
            offset={0}
            speed={2.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={styles.intro}>
              <h1>Hello!</h1>
              <Image src="/svgs/h-zigzag-line.svg" width={1000} height={10} />
              <h2>My name is James Volpe. Welcome to my portfolio.</h2>
              <DownArrow style={{ margin: "auto" }} onClick={() => scroll(1)} />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
      <Footer />
    </PublicLayout>
  );
};

export default Home;
