/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Header = (props) => {
  const small = props.small ? "-small" : "";

  return (
    <>
      <div id="nav">
        <div className="wrapper">
          <Link href="/">
            <a className="red button">About Us</a>
          </Link>
          <Link href="/brands">
            <a className=" red button">Brands</a>
          </Link>
          <Link href="/suburbs">
            <a className=" red button">Suburbs We Service</a>
          </Link>
          <Link href="/contact">
            <a className=" red button">Contact Us</a>
          </Link>
        </div>
      </div>
      <div className="mario-wrapper">
        <img src={`/img/mario${small}.png`} alt="mario" className="mario" />
      </div>
      <div id={`top${small}`}>
        <div className="wrapper">
          <h1> All Districts Washing Machine Service </h1>
          <div className="clear"></div>
          <h2>
            Call <strong>Mario</strong>, your local service man and save
          </h2>
          {/* <h3 className={`phone${small}`}> 9704 7577 </h3> */}
          <a href="tel:0418 40353" className={`mobile${small}`}>
            0418 540 353
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
