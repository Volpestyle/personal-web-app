import { NextPage } from "next";
import { Auth, withSSRContext } from "aws-amplify";
import { ReactElement, ReactNode, useEffect } from "react";
import { LayoutPage } from "../../types/layoutPage";
import { useSession } from "next-auth/react";
import CMSLayout from "../../components/layouts/cms.layout";
import router from "next/router";
import { useToasts } from "react-toast-notifications";

const Dashboard: LayoutPage = ({}) => {
  return (
    <>
      <h1>Hello!</h1>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: any) {
  return <CMSLayout>{page}</CMSLayout>;
};

export default Dashboard;
