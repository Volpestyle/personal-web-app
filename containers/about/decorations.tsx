import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import styles from "styles/containers/about/Decorations.module.scss";
import { useEffect, useState, useRef, useMemo } from "react";
import { CSSProperties } from "react";
import { strEnum } from "utils/basic";

const Decorations = () => {
  return (
    <>
      <ParallaxLayer
        offset={0}
        speed={-2}
        style={{
          height: "6174px",
          marginTop: "-2350px",
        }}
      >
        <div className={styles.longBg} />
      </ParallaxLayer>
    </>
  );
};

export default Decorations;
