import Head from "next/head";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title, notHeader }) {
  return (
    <>
      <Head>
        <title>{title} - MetricTime</title>
        <link rel="shortcut icon" href="/images/logo.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="h-full pb-4">
        <Nav />
        {!notHeader && <Header />}
        {children}
        <Footer />
      </div>
    </>
  );
}
