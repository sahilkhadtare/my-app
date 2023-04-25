import { AccountProvider } from "@/hooks/useAccount";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AccountProvider>
      <Component {...pageProps} />
    </AccountProvider>
  );
}
