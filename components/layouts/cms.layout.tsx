import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { TopNav } from "../topNav";
import { useSession } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export const CMSLayout: NextPage<Props> = (children) => {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

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
