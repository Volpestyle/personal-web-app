import React from "react";
import { NextPage } from "next";
import { TopNav } from "../topNav";
import { useSession } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export const CMSLayout: NextPage<Props> = ({ children }) => {
  const { data: session, status: sessionStatus } = useSession({
    required: true,
  });

  return sessionStatus === "loading" ? (
    <>
      <TopNav />
      <main>{children}</main>
    </>
  ) : (
    <></>
  );
};

export default CMSLayout;
