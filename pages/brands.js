/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Brands() {
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
      <Header small />
      <div style={{ backgroundColor: "#cacaca" }}>
        &nbsp;
        <div id="brands" className="wrapper panel">
          <h1 className="page-title">Brands</h1>
          <div className="clear"></div>
          <ul>
            <li>
              <img
                src="/img/01-artiston.gif"
                alt="01-artiston"
                width="214"
                height="122"
              />
            </li>
            <li>
              <img
                src="/img/02-simpson.gif"
                alt="02-simpson"
                width="214"
                height="122"
              />
            </li>
            <li>
              <img
                src="/img/03-whirlpool.gif"
                alt="03-whirlpool"
                width="214"
                height="122"
              />
            </li>
            <li>
              <img
                src="/img/04-westinghouse.gif"
                alt="04-westinghouse"
                width="214"
                height="122"
              />
            </li>

            <li>
              <img
                src="/img/05-speed-queen.gif"
                alt="05-speed-queen"
                width="214"
                height="122"
              />
            </li>
            <li>
              <img
                src="/img/06-asko.gif"
                alt="06-asko"
                width="214"
                height="122"
              />
            </li>
            <li>
              <img
                src="/img/07-samsung.gif"
                alt="07-samsung"
                width="214"
                height="122"
              />
            </li>
            <li>
              <img
                src="/img/08-fischer.gif"
                alt="08-fischer"
                width="214"
                height="122"
              />
            </li>

            <li>
              <img src="/img/09-lg.gif" alt="09-lg" width="214" height="122" />
            </li>
            <li>
              <img
                src="/img/10-kleenmaid.gif"
                alt="10-kleenmaid"
                width="214"
                height="122"
              />
            </li>
            <li>
              <img
                src="/img/11-hoover.gif"
                alt="11-hoover"
                width="214"
                height="122"
              />
            </li>
            <li>
              <img
                src="/img/12-bosch.gif"
                alt="12-bosch"
                width="214"
                height="122"
              />
            </li>
          </ul>
          <h1 className="more"> And Most Other Brands </h1>
        </div>
        &nbsp;
      </div>
      <Footer />
    </div>
  );
}
