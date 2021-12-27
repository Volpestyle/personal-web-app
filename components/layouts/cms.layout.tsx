import React, { useEffect } from "react";
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
  useEffect(() => {
    console.log(session);
  }, [session]);

  return sessionStatus === "authenticated" ? (
    <>
      <TopNav />
      <main>{children}</main>
    </>
  ) : (
    <></>
  );
};

export default CMSLayout;
