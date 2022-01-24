import PublicLayout from "components/layouts/public.layout";
import type { NextPage } from "next";
import { createRef, useEffect, useRef } from "react";
import useScrollTo from "react-spring-scroll-to-hook";
import styles from "styles/containers/about/AboutMe.module.scss";
import Image from "next/image";
import LinkButton from "components/ui/linkButton";
import { useRouter } from "next/router";
import { PDFViewer } from "components/pdf-viewer/pdf-viewer";
import { Button } from "components/ui/button";
import { config, useSpring } from "@react-spring/web";

const RESUME_SRC = "/resume/spring-2022.pdf";
const AboutMe: NextPage = () => {
  const router = useRouter();

  const { scrollTo } = useScrollTo(config.slow);

  const handleScroll = (section: string) => {
    if (
      router.asPath.slice(
        router.asPath.indexOf("#") + 1,
        router.asPath.length
      ) !== section
    ) {
      scrollTo(document.getElementById(section));
      window.location.hash = `#${section}`;
    } else {
      scrollTo(document.getElementById(section));
    }
  };

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
            <LinkButton
              imgSrc={"/svgs/arrow-down-white.svg"}
              onClick={() => handleScroll("resume")}
            >
              my resumé
            </LinkButton>
            {/* <LinkButton imgSrc={"/svgs/arrow-down-white.svg"} href="/aboutme">
              courses
            </LinkButton> */}
          </div>
          <div className={styles.resumeWrapper}>
            <div className={styles.resumeContainer} id={"resume"}>
              <PDFViewer pdfSrc={RESUME_SRC} />
              <Button style={{ color: "white", width: "15rem" }}>
                <a target={"_blank"} href={RESUME_SRC}>
                  download/view
                  <span style={{ paddingLeft: "1em" }}>
                    <Image
                      src={"/svgs/download-white.svg"}
                      width={20}
                      height={20}
                    />
                  </span>
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
