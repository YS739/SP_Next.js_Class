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
      </Head>
      <div>
        <h2>Navigation</h2>
        <Link href={`/about`}>About</Link>
        <Link href={`/profile`}>Profile</Link>
      </div>
      <Component {...pageProps} />
      <div>Footer</div>
    </div>
  );
};
export default App;
