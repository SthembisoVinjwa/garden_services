import { useState, useEffect } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;

      if (newWidth <= 736 && screenWidth > 736) {
        setScreenWidth(newWidth);
      } else if (newWidth > 736 && screenWidth <= 736) {
        setShowMenu(false);
        setScreenWidth(newWidth);
      }
    };

    const debouncedResize = debounce(handleResize, 10);
    window.addEventListener("resize", debouncedResize);

    return () => window.removeEventListener("resize", debouncedResize);
  }, [screenWidth]);

  return (
    <div className="headerWrapper">
      <div className="logo">
        <img src="src/images/low_res.png" alt="Veld Eco Lawns logo" />
      </div>
      <ul className="navbar">
        {screenWidth > 736 ? (
          <>
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
          </>
        ) : (
          <div>
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              className="hamburgerIcon"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        )}
      </ul>
      {showMenu && (
        <div className="menuContainer">
          <>
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
          </>
        </div>
      )}
    </div>
  );
};

function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

export default Header;
