import "@/css/tailwind.css";
import Footer from "@/components/Footer";
import * as gtag from "../lib/gtag";
import Head from "next/head";
import Header from "@/components/Header";
import SectionContainer from "@/components/SectionContainer";
import twitterCard from "@/img/twitter-card.png";
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@itsakeller" />
        <meta name="twitter:creator" content="@itsakeller" />
        <meta name="twitter:title" content="Andreas Keller" />
        <meta
          name="twitter:description"
          content="I write about building modern websites with Next.js"
        />
        <meta name="twitter:image" content={`https://andreaskeller.name${twitterCard}`} />
        <meta property="og:url" content="https://andreaskeller.name" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Andreas Keller" />
        <meta
          property="og:description"
          content="I write about building modern websites with Next.js"
        />
        <meta property="og:image" content={`https://andreaskeller.name${twitterCard}`} />
        <title>Andreas Keller</title>
        <meta name="description" content="I write about building modern websites with Next.js" />
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
