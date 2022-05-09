import { signOut } from "next-auth/react";
import styles from "styles/components/cms/topNav.module.scss";
import { Button } from "containers/cms/button";

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
