import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Washing Machine Service</title>
        <meta
          name="description"
          content="All Districts Washing Machine Service  - 0418 540 353 - Melbourne"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header small="" />
      <div style={{ backgroundColor: "#cacaca" }}>
        <ul id="about-us" className="wrapper">
          <li>Over 50 years experience</li>
          <li>Same day service</li>
          <li>All work guaranteed</li>
          <li>Fixed price on quote</li>
          <li>Discount to pensioners</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
