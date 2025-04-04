import { Link } from "react-router";

const logo = new URL("../img/logo.png", import.meta.url);
const searchIcon = new URL("../img/search-icon.svg", import.meta.url);
const accountIcon = new URL("../img/account-icon.svg", import.meta.url);
const cartIcon = new URL("../img/cart-icon.svg", import.meta.url);
const menuIcon = new URL("../img/menu-icon.svg", import.meta.url);

function Header() {
  return (
    <div className="w-full">
      <div className="big-container flex justify-between items-center py-2.5">
        <div className="flex items-center gap-5 md:hidden">
          <img src={menuIcon.pathname} alt="menu-icon" />
          <img src={searchIcon.pathname} alt="search-icon" />
        </div>

        <div className="md:order-1 order-none">
          <img src={logo.pathname} alt="Logo" className="mx-auto md:mx-0" />
        </div>

        <div className="hidden md:flex gap-8 text-sm font-normal md:order-2">
          <Link to="/">Shop</Link>
          <Link to="/">Science</Link>
          <Link to="/">Press</Link>
          <Link to="/">Blogs</Link>
          <Link to="/">Tutorials</Link>
        </div>

        <div className="flex items-center gap-3.5 md:order-3">
          <img
            className="hidden md:inline"
            src={searchIcon.pathname}
            alt="search-icon"
          />

          <img src={accountIcon.pathname} alt="account-icon" />
          <img src={cartIcon.pathname} alt="cart-icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
