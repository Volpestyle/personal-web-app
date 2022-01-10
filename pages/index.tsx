import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/containers/home/Home.module.scss";
import PublicLayout from "components/layouts/public.layout";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import Decorations from "containers/home/decorations";
import ChangingWords from "components/changingWords";
import GrowOnHover from "components/ui/growOnHover";
import { InView } from "react-intersection-observer";
import { createRef } from "react";
import LinkButton from "components/ui/linkButton";

const Home: NextPage = () => {
  const wordGroups = [
    ["software engineer"],
    ["web developer"],
    ["front-end engineer"],
    ["React developer"],
    ["designer"],
    ["musician :D"],
  ];
  const parallax = useRef<IParallax>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  const ref = createRef<HTMLDivElement>();
  return (
    <PublicLayout showFooter={false}>
      <div className={styles.container}>
        <Head>
          <title>jcvolpe</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Parallax className={styles.parallax} pages={2} ref={parallax}>
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
              <h2>I'm James, welcome to my portfolio.</h2>
              <GrowOnHover style={{ margin: "auto" }} onClick={() => scroll(1)}>
                <Image
                  src="/svgs/arrow-down-solid.svg"
                  height={"100%"}
                  width={"100%"}
                />
              </GrowOnHover>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.1} speed={2.5} style={{}}>
            <div className={styles.intro} ref={ref}>
              <h1>What's good</h1>
              <Image src="/svgs/h-zigzag-line.svg" width={1000} height={10} />
              <h2>
                I'm a
                <ChangingWords wordGroups={wordGroups} />
              </h2>
              {/* <span className={styles.small}>
                (basically I like to make things)
              </span> */}
              <div className={styles.body}>
                <p>
                  Ever since I started using computers, I found myself
                  interested in writing code, inspired by the endless creative
                  possibilities.
                </p>
                <p>
                  Here you'll find some of my creations and projects I'm most
                  proud of, as well as my resumé and more info about me!
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  marginTop: "3rem",
                }}
              >
                <LinkButton href="/aboutme">about me</LinkButton>
                <LinkButton href="/projects">my projects</LinkButton>
                <LinkButton href="/contact">things i've learned</LinkButton>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </PublicLayout>
  );
};

export default Home;
