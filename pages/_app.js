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
        <div
          onClick={() => {
            router.push("/about");
          }}
        >
          About
        </div>
        <div onClick={() => router.push("/profile")}>Profile</div>
      </div>
      <Component {...pageProps} />
      <div>Footer</div>
    </div>
  );
};
export default App;
