import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import Amplify from "aws-amplify";
fontAwesomeConfig.autoAddCss = false;
import config from "../src/aws-exports";
Amplify.configure({
  ...config,
  ssr: true,
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
