// import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/global.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;