import axios from "axios";
import { Session } from "next-auth";
import router from "next/router";
import { useToasts } from "react-toast-notifications";
import styles from "../styles/components/topnav.module.scss";
import { Button } from "./button";

type TopNavProps = {
  session: Session | null;
};

export const TopNav = ({ session }: TopNavProps) => {
  const { addToast } = useToasts();
  const handleLogout = async () => {
    await axios("/logout", {
      baseURL: process.env.NEXTAUTH_URL,
      method: "POST",
    });
  };
  return (
    <div className={styles.container}>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};
