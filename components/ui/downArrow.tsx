import { animated, useSpring } from "@react-spring/web";
import { useState, MouseEvent, CSSProperties } from "react";
import Image from "next/image";

type DownArrowProps = {
  onClick: () => void;
  style: CSSProperties;
};

const DownArrow = ({ onClick, style }: DownArrowProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const animatedStyles = useSpring({
    from: {
      height: "15px",
      width: "15px",
    },
    to: {
      height: toggle ? "30px" : "15px",
      width: toggle ? "30" : "15px",
    },
    config: { mass: 1, tension: 180, friction: 12 },
  });

  const onMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    setToggle(true);
  };

  const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    setToggle(false);
  };

  return (
    <animated.div
      style={{ cursor: "pointer", ...style, ...animatedStyles }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a onClick={onClick}>
        <Image
          src="/svgs/arrow-down-solid.svg"
          height={"100%"}
          width={"100%"}
        />
      </a>
    </animated.div>
  );
};

export default DownArrow;
