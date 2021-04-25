import Head from "next/head";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title, notHeader }) {
  return (
    <>
      <Head>
        <title>{title} | MetricTime</title>
        <link rel="shortcut icon" href="/images/logo.ico" />
        <meta charSet="utf-8" />
        <meta name="author" content="MetricTime" />
        <meta
          name="description"
          content="MetricTime es una aplicación que se especializa en la monitorización de las diferentes métricas asociadas a
          uno o diversos dispositivos electrónicos, para poder llevar a cabo un control
          y seguimiento de su respectivo comportamiento mediante gráficas
          presentadas en tiempo real"
        />

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="monitoreo metricas , control metricas , "
        />
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
