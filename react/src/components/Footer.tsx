import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="linksRow">
        <div className="infoCard">
          <p>logo</p>
        </div>
        <div className="infoCard">
          <p>
            <strong>Contact Info</strong>
          </p>
          <p>
            📞 <NavLink to="tel:078934424">078 934 424</NavLink>
          </p>
          <p>
            📧{" "}
            <NavLink to="mailto:vinjwacr7@mail.com">vinjwacr7@mail.com</NavLink>
          </p>
        </div>
        <div className="infoCard">
          <p>
            <strong>Quick links</strong>
          </p>
          <p>www.jone.con</p>
        </div>
        <div className="infoCard">
          <p>
            <strong>Our services</strong>
          </p>
          <p>something</p>
        </div>
      </div>
      <div className="copyrightRow"></div>
    </div>
  );
};

export default Footer;
