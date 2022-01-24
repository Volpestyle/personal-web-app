import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import styles from "styles/containers/home/Decorations.module.scss";

const Decorations = () => {
  return (
    <>
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: 'url("/images/blackbg-pt1.png")',
          backgroundSize: "cover",
        }}
      />
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(9,9,121,0) 75%, rgba(0,0,0,1) 100%)",
          backgroundSize: "cover",
        }}
      />
      <ParallaxLayer
        offset={1}
        speed={1}
        style={{
          width: "100%",
          height: "100%",
          marginTop: "-1rem",
          backgroundImage: 'url("/images/blackbg-pt2.png")',
          backgroundSize: "cover",
        }}
      />
    </>
  );
};

export default Decorations;
