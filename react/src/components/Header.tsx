import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="logo">logo</div>
      <ul className="navbar">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Services</NavLink>
        </li>
        <li>
          <NavLink to="/">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/">Contact Us</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
