import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Test입니다.</title>
        <meta name="description" content="설명입니다." />
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
