import PublicLayout from "components/layouts/public.layout";
import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import styles from "styles/containers/about/AboutMe.module.scss";
import Image from "next/image";
import LinkButton from "components/ui/linkButton";
import { useRouter } from "next/router";
import { Button } from "components/ui/button";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import Decorations from "containers/about/decorations";
import { RESUME_SRC } from "utils/constants";

const AboutMe: NextPage = () => {
  // Remove scrollbar
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  const router = useRouter();

  const hashToPage: { [key: string]: any } = {
    resume: 1,
  };

  const parallax = useRef<IParallax>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  const handleScroll = (section: string) => {
    if (
      router.asPath.slice(
        router.asPath.indexOf("#") + 1,
        router.asPath.length
      ) !== section
    ) {
      scroll(hashToPage[section]);
      window.location.hash = `#${section}`;
    } else {
      scroll(hashToPage[section]);
    }
  };

  return (
    <PublicLayout showFooter={false}>
      <Parallax pages={2} ref={parallax}>
        <Decorations />
        <ParallaxLayer offset={0} speed={1} style={{ zIndex: 100 }}>
          <div className={styles.page1Container}>
            <div className={styles.body}>
              <h1>About me</h1>
              <div style={{ marginTop: "-1rem" }}>
                <Image
                  src="/svgs/h-zigzag-line-white.svg"
                  width={1000}
                  height={10}
                  alt={""}
                />
              </div>
              <h2>Let me introduce myself...</h2>
              <p>
                I'm a software engineer from Chicago, IL USA. In May 2021, I
                graduated from Iowa State University with a B.S. in Software
                Engineering. 📚
              </p>
              <p>
                Over the years I've found many passions. From animation, graphic
                design, and writing music, to full stack web development. I
                think the common theme here is -
                <br /> I love to make things. 🧑‍🎨
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "2rem",
                  marginTop: "3rem",
                  marginLeft: "3rem",
                }}
              >
                <LinkButton
                  imgSrc={"/svgs/arrow-down-white.svg"}
                  onClick={() => handleScroll("resume")}
                  iconStyle={{
                    transform: "rotate(180deg) translateY(.5rem)",
                    paddingRight: "1rem",
                  }}
                  underline={true}
                >
                  my resumé
                </LinkButton>
                {/* <LinkButton imgSrc={"/svgs/arrow-down-white.svg"} href="/aboutme">
              courses
            </LinkButton> */}
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-4} style={{ zIndex: 100 }}>
          <div className={styles.resumeWrapper}>
            <div className={styles.resumeContainer}>
              <iframe
                src={RESUME_SRC}
                frameBorder="0"
                width="75%"
                height="700px"
              />
              <Button
                style={{ color: "white", width: "15rem" }}
                href={RESUME_SRC}
                newTab
              >
                download/view
                <span style={{ paddingLeft: "1em" }}>
                  <Image
                    src={"/svgs/download-white.svg"}
                    width={20}
                    height={20}
                    alt={""}
                  />
                </span>
              </Button>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </PublicLayout>
  );
};

export default AboutMe;
