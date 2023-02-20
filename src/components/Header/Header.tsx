
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/InStock-Logo.svg";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav className="header__nav">
        <Link to="/">Warehouse</Link>
        <Link to="/">Inventory</Link>
      </nav>
    </header>
  );
};

export default Header;
