import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['200',"300", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return(
  <main className={montserrat.className}>
    <Component {...pageProps} />
  </main>);
}
