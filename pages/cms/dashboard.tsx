import { NextPage } from "next";
import { ReactElement, ReactNode, useEffect } from "react";
import { LayoutPage } from "../../types/layoutPage";
import { useSession } from "next-auth/react";
import CMSLayout from "../../components/layouts/cms.layout";
import router from "next/router";
import { useCMSContext } from "../../components/providers/cmsProvider";
import { SSOUser } from "../../utils/samlProviders";

const Dashboard: LayoutPage = ({}) => {
  const { user } = useCMSContext();
  return (
    <>
      <h1>Hello {user?.attributes.GivenName[0]}</h1>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: any) {
  return <CMSLayout>{page}</CMSLayout>;
};

export default Dashboard;
