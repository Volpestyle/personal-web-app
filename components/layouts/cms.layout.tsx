import { NextPage } from "next";
import router from "next/router";
import React, { useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { AuthResponse } from "../../types/authResponse";
import { TopNav } from "./topNav";

type Props = AuthResponse & {
  children: React.ReactNode;
};

export const CMSLayout: NextPage<Props> = ({ authenticated, children }) => {
  const { addToast } = useToasts();
  useEffect(() => {
    if (!authenticated) {
      router.push("/login");
      addToast("You are not authenticated", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  }, []);
  return authenticated ? (
    <>
      <TopNav />
      <main>{children}</main>
    </>
  ) : (
    <></>
  );
};

export default CMSLayout;
