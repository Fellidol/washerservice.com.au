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
        <div id="suburbs" className="wrapper panel">
          <h1 className="page-title">Suburbs We Service</h1>
          <div className="clear"></div>

          <ul className="columns four">
            <li>
              Alexandra
              <br />
              Bonnie Doon
              <br />
              Buxton
              <br />
              Benalla
              <br />
              Eildon
            </li>
            <li>
              Euroa
              <br />
              Jamieson
              <br />
              Killongworth
              <br />
              Mansfield
              <br />
              Merton
              <br />
            </li>
            <li>
              Molesworth
              <br />
              Seymour
              <br />
              Shepparton
              <br />
              Violet Town
              <br />
              Wangaratta
            </li>
            <li>
              Yark
              <br />
              Yea
              <br />
              <br />
              <br />
              <br />
            </li>
          </ul>

          <h1 className="more"> and all surrounding suburbs </h1>
        </div>
        &nbsp;
      </div>
      <Footer />
    </div>
  );
}
