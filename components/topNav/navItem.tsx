import Link from "next/link";
import { ReactNode, useState, MouseEvent } from "react";
import { useSpring, animated } from "@react-spring/web";
import styles from "styles/components/nav.module.scss";
import { useEffect } from "react";
import { withRouter } from "next/router";

type NavItemProps = {
  href: string;
  children: ReactNode;
  router: any;
};

const NavItem = ({ href, children, router }: NavItemProps) => {
  const [isUnderlined, setUnderline] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);

  useEffect(() => {
    if (router.pathname === href) {
      setSelected(true);
    }
  }, [router.pathname]);

  useEffect(() => {
    if (selected) setUnderline(true);
  }, [selected]);

  const createUnderline = useSpring({
    from: { width: "0%", marginLeft: "50%" },
    to: {
      width: isUnderlined ? "100%" : "0%",
      marginLeft: isUnderlined ? "0px" : "50%",
    },
    config: isUnderlined
      ? { mass: 1, tension: 180, friction: 12 }
      : { mass: 1, tension: 170, friction: 26 },
  });

  const onMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    setUnderline(true);
  };

  const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    setUnderline(false);
  };

  return (
    <div
      className={styles.navItem}
      onMouseEnter={!selected ? onMouseEnter : () => {}}
      onMouseLeave={!selected ? onMouseLeave : () => {}}
    >
      <Link href={href}>{children}</Link>
      <animated.div className={styles.underline} style={createUnderline} />
    </div>
  );
};

export default withRouter(NavItem);
