import type { AppProps } from "next/app";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import { ToastProvider } from "react-toast-notifications";
import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
fontAwesomeConfig.autoAddCss = false;
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: any) => page);
  return (
    <SessionProvider session={session}>
      <ToastProvider>{getLayout(<Component {...pageProps} />)}</ToastProvider>
    </SessionProvider>
  );
}

export default MyApp;
