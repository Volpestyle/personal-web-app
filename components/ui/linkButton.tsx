import { animated, useSpring } from "@react-spring/web";
import Link from "next/link";
import { ReactNode, MouseEvent, useState } from "react";
import styles from "styles/components/ui/linkButton.module.scss";
import Image from "next/image";

type LinkButtonProps = {
  href?: string;
  onClick?: () => void;
  imgSrc?: string;
  iconBefore?: boolean;
  iconStyle?: any;
  underline?: boolean;
  newTab?: boolean;
  children: ReactNode;
};

const LinkButton = ({
  href,
  onClick,
  imgSrc = "/svgs/link-white.svg",
  iconBefore,
  iconStyle,
  underline,
  newTab,
  children,
}: LinkButtonProps) => {
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
      onClick={onClick}
    >
      {iconBefore && (
        <animated.div style={{ paddingRight: "1rem", ...slideInIcon }}>
          <Image src={imgSrc} height={20} width={20} alt={""} />
        </animated.div>
      )}
      <div className={underline ? styles.link : undefined}>
        {newTab || !href ? (
          <a href={href} target="_blank" rel="noreferrer">
            {children}
          </a>
        ) : (
          <Link href={href}>{children}</Link>
        )}
      </div>
      {!iconBefore && (
        <animated.div
          style={{ paddingLeft: "1rem", ...slideInIcon, ...iconStyle }}
        >
          <Image src={imgSrc} height={20} width={20} alt={""} />
        </animated.div>
      )}
    </div>
  );
};
export default LinkButton;
