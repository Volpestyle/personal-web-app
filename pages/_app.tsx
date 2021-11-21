import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import Amplify from "aws-amplify";
fontAwesomeConfig.autoAddCss = false;
import config from "../src/aws-exports";
import { ToastProvider } from "react-toast-notifications";
import { NextPage } from "next";

Amplify.configure({
  ...config,
  ssr: true,
});

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: any) => page);
  return (
    <ToastProvider>{getLayout(<Component {...pageProps} />)}</ToastProvider>
  );
}

export default MyApp;
