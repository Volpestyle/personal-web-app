import router from "next/router";
import { useToasts } from "react-toast-notifications";
import styles from "../styles/components/topnav.module.scss";
import { Button } from "./button";
type TopNavProps = {};

export const TopNav = ({}: TopNavProps) => {
  const { addToast } = useToasts();
  const handleLogout = () => {};
  return (
    <div className={styles.container}>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};
