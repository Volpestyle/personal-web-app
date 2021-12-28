import React, { useEffect, createContext, useContext, useMemo } from "react";
import { NextPage } from "next";
import { TopNav } from "../topNav";
import { useSession } from "next-auth/react";
import { SSOUser } from "../../utils/samlProviders";
import { CMSProvider } from "../providers/cmsProvider";

type Props = {
  children: React.ReactNode;
};

export const CMSLayout: NextPage<Props> = ({ children }) => {
  const { data: session, status: sessionStatus } = useSession({
    required: true,
  });

  const user = useMemo(() => {
    return session?.user as SSOUser;
  }, [session]);

  return sessionStatus === "authenticated" ? (
    <CMSProvider value={{ user }}>
      <TopNav />
      <main>{children}</main>
    </CMSProvider>
  ) : (
    <></>
  );
};

export default CMSLayout;
