import { NextPage } from "next";
import { Auth, withSSRContext } from "aws-amplify";
import { ReactElement, ReactNode, useEffect } from "react";
import { LayoutPage } from "../../types/layoutPage";
import CMSLayout from "../../components/layouts/cms.layout";
import { authCurrentUser } from "../../utils/authUtils";
import { AuthResponse } from "../../types/authResponse";
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
  return <CMSLayout authenticated={page.props.authenticated}>{page}</CMSLayout>;
};

export async function getServerSideProps(context: any) {
  return authCurrentUser(context);
}

export default Dashboard;
