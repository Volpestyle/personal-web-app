import { signOut } from "next-auth/react";
import styles from "../styles/components/topnav.module.scss";
import { Button } from "../button";

export const TopNav = () => {
  const handleLogout = () => {
    signOut({ callbackUrl: `${window.location.pathname}/login` });
  };
  return (
    <div className={styles.container}>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};
