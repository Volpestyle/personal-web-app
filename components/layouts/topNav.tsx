import Auth from "@aws-amplify/auth";
import router from "next/router";
import { useToasts } from "react-toast-notifications";
import styles from "../../styles/components/topnav.module.scss";
import { Button } from "./button";
type TopNavProps = {};

export const TopNav = ({}: TopNavProps) => {
  const { addToast } = useToasts();
  const handleLogout = () => {
    Auth.signOut()
      .then(() => {
        router.push("/");
        addToast("You have been logged out", {
          appearance: "success",
          autoDismiss: true,
        });
      })
      .catch((e) => {
        console.error(e);
        addToast("Something went wrong logging out...", {
          appearance: "error",
          autoDismiss: true,
        });
      });
  };
  return (
    <div className={styles.container}>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};
