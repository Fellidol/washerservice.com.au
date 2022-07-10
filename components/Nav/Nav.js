import Link from "next/link";

const Nav = () => {
  return (
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
  );
};

export default Nav;
