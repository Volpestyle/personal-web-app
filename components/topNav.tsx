import { signOut } from "next-auth/react";
import { useToasts } from "react-toast-notifications";
import styles from "../styles/components/topnav.module.scss";
import { errorOptions, successOptions } from "../utils/toasts";
import { Button } from "./button";
import { useCMSContext } from "./providers/cmsProvider";

export const TopNav = () => {
  const { addToast } = useToasts();
  const { user } = useCMSContext();
  const handleLogout = () => {
    signOut({ callbackUrl: `${window.location.pathname}/login` });
  };
  return (
    <div className={styles.container}>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};
