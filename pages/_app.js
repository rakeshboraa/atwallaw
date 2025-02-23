import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${nunito.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
