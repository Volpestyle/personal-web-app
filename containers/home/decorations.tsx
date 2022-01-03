import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";

const Decorations = () => {
  return (
    <>
      <ParallaxLayer offset={0} speed={4}>
        <div style={{ width: "100%", height: "100%", transform: "scale(1.5)" }}>
          <Image src="/svgs/dh-zigzag-bar.svg" layout="fill" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={4}>
        <div
          style={{
            width: "100%",
            height: "100%",
            transform: "scale(1.5) scaleX(1.5) translate(0%, -10%)",
          }}
        >
          <Image src="/svgs/dh-l-zigzag-bar.svg" layout="fill" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={3}>
        <div
          style={{
            width: "100%",
            height: "100%",
            transform: "scale(.7) translate(-60%, 0%)",
          }}
        >
          <Image src="/svgs/dh-pillar-1.svg" layout="fill" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={3}>
        <div
          style={{
            width: "100%",
            height: "100%",
            transform: "scale(.7) translate(65%, 60%)",
          }}
        >
          <Image src="/svgs/dh-l-pillar-1.svg" layout="fill" />
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Decorations;
