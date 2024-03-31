import Image from "next/image";
import Link from "next/link";
import NavItem from "./navItem";
import styles from "styles/components/nav.module.scss";
import { useState } from "react";

const Nav = () => {
  return (
    <div className={styles.container}>
      <nav>
        <div className={styles.navLogo}>
          <Link href={"/"}>
            <Image src="/svgs/nav-logo.svg" height={50} width={50} alt={""} />
          </Link>
        </div>
        <ul>
          <li>
            <NavItem href={"/aboutme"}>about me</NavItem>
          </li>
          <li>
            <NavItem href={"/projects"}>projects</NavItem>
          </li>
          <li>
            <NavItem href={"/contact"}>get in touch</NavItem>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
