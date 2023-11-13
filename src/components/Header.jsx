import { useState, useContext } from "react";
import { ShoppingCart } from "react-feather";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserContext from "../contexts/UserContext";
import logoImg from "../assets/img/logo.png";
import useOnline from "../hooks/useOnline";

const Logo = () => (
  <NavLink to="/" className="logo">
    <img data-testid="logo" src={logoImg} alt="logo" />
  </NavLink>
);
const NavItems = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <ul className="nav-items">
      <NavLink to="/" className="nav-link">
        <li>Home</li>
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        <li>Contact</li>
      </NavLink>
      <NavLink to="/about" className="nav-link">
        <li>About</li>
      </NavLink>
      <NavLink to="/instamart" className="nav-link">
        <li>Instamart</li>
      </NavLink>
      <Link to={"cart"} className="nav-link">
        <li>
          <div className="relative">
            <ShoppingCart />
            {cartItems.length !== 0 && (
              <div className="bg-[#ffb0b0] absolute top-[-20px] right-[-20px] h-7 w-7 rounded-full grid place-content-center pt-[2px] text-[#353434] ">
                {cartItems.length}
              </div>
            )}
          </div>
        </li>
      </Link>
    </ul>
  );
};
// Practice feature
const LogInLogOut = () => {
  const [isLogedin, setIsLogin] = useState(false);

  const { user } = useContext(UserContext);

  const toggleLogedin = () => {
    setIsLogin((prev) => !prev);
  };

  let bgColor = {
    backgroundColor: isLogedin ? "#fc8019" : "#48c479",
  };

  return (
    <>
      <div className="ml-4">{isLogedin ? user.username : ""}</div>
      <div style={{ paddingInline: "2rem" }}>
        {isLogedin ? (
          <NavLink to="/">
            <button style={bgColor} className="btn-log" onClick={toggleLogedin}>
              Log Out
            </button>
          </NavLink>
        ) : (
          <NavLink to="auth/login">
            <button style={bgColor} className="btn-log" onClick={toggleLogedin}>
              Login
            </button>
          </NavLink>
        )}
      </div>
    </>
  );
};

const Navbar = () => (
  <nav className="navbar">
    <Logo />
    <NavItems />
    <LogInLogOut />
  </nav>
);

const Header = () => {
  let isOnline = useOnline();

  return (
    <header className="header">
      <div className={isOnline ? "online" : "offline"}>
        <div style={{ backgroundColor: "teal", textAlign: "center" }}>
          Offline, Please check your internet connection!!!
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
