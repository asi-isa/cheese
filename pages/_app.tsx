import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Montserrat } from "@next/font/google";

const font = Montserrat({
  variable: "--font",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={font.variable}>
      <Component {...pageProps} />
    </div>
  );
}
