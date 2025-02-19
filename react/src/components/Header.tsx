import "./Header.css";

const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="logo">
        <img src="src/images/low_res.png" alt="Veld Eco Lawns logo" />
      </div>
      <ul className="navbar">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#footer">Contact us</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
