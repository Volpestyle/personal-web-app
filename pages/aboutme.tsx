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
      <div className={styles.container}></div>
    </PublicLayout>
  );
};

export default AboutMe;
