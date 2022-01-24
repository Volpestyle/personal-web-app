import PublicLayout from "components/layouts/public.layout";
import type { NextPage } from "next";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useRef } from "react";
import Decorations from "containers/about/decorations";
import homeStyles from "styles/containers/home/Home.module.scss";
import styles from "styles/containers/about/AboutMe.module.scss";
import Image from "next/image";
import LinkButton from "components/ui/linkButton";
import { useRouter } from "next/router";
import { PDFViewer } from "components/pdf-viewer/pdf-viewer";
import { Button } from "components/ui/button";

const downArrowSvg = "/svgs/arrow-down-solid.svg";
const AboutMe: NextPage = () => {
  const parallax = useRef<IParallax>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  const router = useRouter();
  useEffect(() => {
    const onHashChangeStart = (url: string) => {
      const hash = url.slice(url.indexOf("#") + 1, url.length);
      console.log(hash);
      if (hash === "resume") scroll(1);
      if (hash === "education") scroll(3);
    };
    router.events.on("hashChangeStart", onHashChangeStart);
    return () => {
      router.events.off("hashChangeStart", onHashChangeStart);
    };
  }, [router.events]);

  return (
    <PublicLayout showFooter={false}>
      <div className={styles.bgWrap}>
        <Image
          src={"/images/about-me-bg.png"}
          layout="fill"
          objectFit="fill"
          quality={100}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.body}>
          <h1>About me</h1>
          <div style={{ marginTop: "-1rem" }}>
            <Image
              src="/svgs/h-zigzag-line-white.svg"
              width={1000}
              height={10}
            />
          </div>
          <h2>Let me introduce myself...</h2>
          <p>
            I'm a 22 year old software engineer from Chicago, IL USA. In May
            2021, I graduated from Iowa State University with a B.S. in Software
            Engineering. 📚
          </p>
          <p>
            Over the years I've found many passions! Both artistic and
            technical. From animation, graphic design, and writing music, to
            full stack web development. I think the common theme here is that I
            love to make things. 🧑‍🎨
          </p>
          <p>
            At 11 years old I got a itch to understand video games better and
            what made them tick, which let to a general interest in C, Java, and
            other popular languages. On a daily basis we interact with so many
            kinds of software, software that is rapidly improving. I believe
            this what turned my interest into a passion and why I became a
            software engineer. :)
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              marginTop: "3rem",
            }}
          >
            <LinkButton imgSrc={"/svgs/arrow-down-white.svg"} href="/aboutme">
              my resumé
            </LinkButton>
            {/* <LinkButton imgSrc={"/svgs/arrow-down-white.svg"} href="/aboutme">
              courses
            </LinkButton> */}
          </div>
          <div className={styles.resumeWrapper}>
            <div className={styles.resumeContainer}>
              <PDFViewer pdfSrc={"/resume/spring-2022.pdf"} />
              <Button style={{ color: "white" }}>
                <a>
                  download/view
                  <Image
                    src={"/svgs/download-white.svg"}
                    width={20}
                    height={20}
                  />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default AboutMe;
