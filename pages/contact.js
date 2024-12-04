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
        <div style={{ backgroundColor: "#cacaca" }}>
          &nbsp;
          <div
            id="contact"
            className="wrapper panel"
            style={{ boxSizing: "border-box" }}
          >
            <h1 className="page-title"> Contact Us</h1>
            <div
              style={{
                padding: "100px 20px 20px 20px",
                textAlign: "center",
                boxSizing: "border-box",
              }}
              className="wrapper"
            >
              <h2 style={{ marginLeft: 0 }}>
                Call <strong>Mario</strong>
              </h2>
              <a
                href="tel:0418 40353"
                className="mobile"
                style={{ margin: "0 auto", float: "none" }}
              >
                0418 540 353
              </a>
              <div className="clear"></div>
              <br />
              <br />
            </div>
          </div>
        </div>
        &nbsp;
      </div>
      <Footer />
    </div>
  );
}
