import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Next.js</title>
        <meta name="description" content="Next.js 기본 강의 - 연습 페이지" />
        <meta property="og:url" content="https://www.naver.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Next.js" />
        <meta
          property="og:description"
          content="Next.js 기본 강의 - 연습 페이지"
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/112805225/215955489-b329cbf5-9b72-4752-bdb2-90ea70c53d40.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="naver.com" />
        <meta property="twitter:url" content="https://www.naver.com/" />
        <meta name="twitter:title" content="Next.js" />
        <meta
          name="twitter:description"
          content="Next.js 기본 강의 - 연습 페이지"
        />
        <meta
          name="twitter:image"
          content="https://user-images.githubusercontent.com/112805225/215955489-b329cbf5-9b72-4752-bdb2-90ea70c53d40.png"
        />
      </Head>
      <div>
        <h2>Navigation</h2>
        <Link href={`/about`}>About</Link>
        <div onClick={() => router.push("/profile")}>Profile</div>
      </div>
      <Component {...pageProps} />
      <div>Footer</div>
    </div>
  );
};
export default App;
