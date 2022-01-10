import { animated, useSpring } from "@react-spring/web";
import Link from "next/link";
import { ReactNode, MouseEvent, useState } from "react";
import styles from "styles/components/ui/linkButton.module.scss";
import Image from "next/image";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
};

const LinkButton = ({ href, children }: LinkButtonProps) => {
  const [showIcon, setShowIcon] = useState<boolean>(false);

  const slideInIcon = useSpring({
    from: { opacity: 0, y: 20 },
    to: {
      opacity: showIcon ? 1 : 0,
      y: showIcon ? 0 : -20,
    },
    config: showIcon
      ? { mass: 1, tension: 180, friction: 12 }
      : { mass: 1, tension: 170, friction: 26 },
  });

  const onMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    setShowIcon(true);
  };

  const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    setShowIcon(false);
  };
  return (
    <div
      className={styles.container}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.link}>
        <Link href={href}>{children}</Link>
      </div>
      <animated.div style={{ paddingLeft: "1rem", ...slideInIcon }}>
        <Image src="/svgs/link-solid.svg" height={20} width={20} />
      </animated.div>
    </div>
  );
};
export default LinkButton;
