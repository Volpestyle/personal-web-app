import type { AppProps } from "next/app";
import { ToastProvider } from "react-toast-notifications";
import { NextPage } from "next";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { LayoutPage } from "types/layoutPage";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  getLayout: LayoutPage;
  session: Session;
}>) {
  const getLayout = (page: any) => page;
  return (
    <SessionProvider session={pageProps.session}>
      <ToastProvider>{getLayout(<Component {...pageProps} />)}</ToastProvider>
    </SessionProvider>
  );
}

export default MyApp;
