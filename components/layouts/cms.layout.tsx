import { NextPage } from "next";
import router from "next/router";
import React, { useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { TopNav } from "../topNav";

type Props = {
  children: React.ReactNode;
};

export const CMSLayout: NextPage<Props> = (children) => {
  return (
    <>
      <TopNav />
      <main>{children}</main>
    </>
  );
};

export default CMSLayout;
