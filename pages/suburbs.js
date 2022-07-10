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
              Airport West <br />
              Alphington <br />
              Balwyn <br />
              Blackburn <br />
              Box Hill <br />
              Brunswick <br />
              Bulleen <br />
              Bundoora <br />
              Campbellfield <br />
              Carlton <br />
              Coburg <br />
              Craigieburn <br />
              Doncaster <br />
            </li>
            <li>
              Donvale <br />
              Doreen <br />
              Eaglemont <br />
              Epping <br />
              Essendon <br />
              Fairfield <br />
              Fawkner <br />
              Fitzroy <br />
              Glenroy <br />
              Greensborough <br />
              Heidelberg <br />
              Hurstbridge <br />
              Ivanhoe <br />
            </li>
            <li>
              Keilor <br />
              Keilor East <br />
              Kew <br />
              Lalor <br />
              Lower Plenty <br />
              Meadow Heights <br />
              Mernda <br />
              Mill Park <br />
              Mont Albert <br />
              Moonee Ponds <br />
              Oak Park <br />
              Park Orchards <br />
              Pascoevale <br />
            </li>
            <li>
              Preston <br />
              Reservoir <br />
              Rosanna <br />
              Roxburgh Park <br />
              South Morang <br />
              Surrey Hills <br />
              Templestowe <br />
              Thomastown <br />
              Thornbury <br />
              Viewbank <br />
              Warrandyte <br />
              Watsonia <br />
              Yarrambat <br />
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
