import "@/css/tailwind.css";
import Footer from "@/components/Footer";
import * as gtag from "../lib/gtag";
import Head from "next/head";
import Header from "@/components/Header";
import SectionContainer from "@/components/SectionContainer";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="antialiased">
      <Head>
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <SectionContainer>
          <Header />
        </SectionContainer>
        <SectionContainer className="flex-grow">
          <main>
            <Component {...pageProps} />
          </main>
        </SectionContainer>
        <SectionContainer>
          <Footer />
        </SectionContainer>
      </div>
    </div>
  );
}
