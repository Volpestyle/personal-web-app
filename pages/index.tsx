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
import { useEffect } from "react";
import { myOccupations } from "utils/constants";

const Home: NextPage = () => {
  // Remove scrollbar
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

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
              marginTop: "-15rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={styles.introBg}>
              <h1>Hi</h1>
              <Image
                src="/svgs/h-zigzag-line-white.svg"
                width={1000}
                height={10}
              />
              <h2>I'm James, welcome to my portfolio.</h2>
              <GrowOnHover style={{ margin: "auto" }} onClick={() => scroll(1)}>
                <Image
                  src="/svgs/arrow-down-white.svg"
                  height={"100%"}
                  width={"100%"}
                />
              </GrowOnHover>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.1} speed={2.5} style={{}}>
            <div className={styles.intro} ref={ref}>
              <h1>What's good</h1>
              <Image
                src="/svgs/h-zigzag-line-white.svg"
                width={1000}
                height={10}
              />
              <h2>
                I'm a
                <ChangingWords wordGroups={myOccupations} />
              </h2>
              {/* <span className={styles.small}>
                (basically I like to make things)
              </span> */}
              <div className={styles.body}>
                <p>
                  Over the years I've tried my hand at many things, from graphic
                  design to front-end engineering. But ever since I started
                  using computers as a young kid, I found myself interested in
                  writing code, inspired by the endless possibilities.
                </p>
                <p>
                  Here you'll find some of the products of my creative efforts,
                  including my work and projects I'm most proud of :)
                </p>
              </div>
              <div
                style={{
                  marginTop: "3rem",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <LinkButton href="/aboutme">about me</LinkButton>
                  <LinkButton
                    iconBefore
                    newTab
                    imgSrc={"/svgs/external-link-alt-white.svg"}
                    href="https://www.linkedin.com/in/james-volpe/"
                  >
                    <Image
                      src={"/svgs/linkedin-icon.svg"}
                      width={25}
                      height={25}
                    />
                  </LinkButton>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <LinkButton href="/projects">my projects</LinkButton>
                  <LinkButton
                    iconBefore
                    newTab
                    imgSrc={"/svgs/external-link-alt-white.svg"}
                    href="https://github.com/Volpestyle"
                  >
                    <Image
                      src={"/svgs/github-icon.svg"}
                      width={25}
                      height={25}
                    />
                  </LinkButton>
                </div>
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
