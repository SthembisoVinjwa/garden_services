import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerWrapper" id="footer">
      <div className="linksRow">
        <div className="infoCard">
          <div className="logo">
            <img src="src/images/low_res.png" alt="Veld Eco Lawns logo" />
          </div>
          <p>&copy; 2025 Veld Eco Lawns.</p>
        </div>
        <div className="infoCard">
          <p>
            <strong>Contact Info</strong>
          </p>
          <p>
            📞 <a href="tel:078934424">070 000 0000</a>
          </p>
          <p>
            📧 <a href="mailto:vinjwacr7@mail.com">veldlawns@mail.com</a>
          </p>
        </div>
        <div className="infoCard">
          <p>
            <strong>Quick links</strong>
          </p>
          <a href="#home">Home</a>
          <a href="#about">About us</a>
          <a href="#services">Services</a>
        </div>
        <div className="infoCard">
          <p>
            <strong>Our services</strong>
          </p>
          <a href="#">Grass cutting</a>
          <a href="#">Edge and border trimming</a>
          <a href="#">Lawn watering and fertilization</a>
          <a href="#">Leaf and debris cleanup</a>
        </div>
      </div>
      <div className="copyrightRow"></div>
    </div>
  );
};

export default Footer;
