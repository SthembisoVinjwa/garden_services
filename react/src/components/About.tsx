import "./About.css";

const About = () => {
  return (
    <div className="aboutWrapper" id="about">
      <div className="aboutSubsection">
        <h1>Quality and eco-friendly service</h1>
        <p>
          At Veld Eco Lawns, we take pride in providing top-quality lawn care
          services that keep your outdoor spaces looking their best. Our mission
          is to deliver <strong>affordable,</strong> <strong>efficient,</strong>{" "}
          and
          <strong> eco-friendly </strong>lawn care solutions that save you time
          and effort. Whether it's a one-time service or regular maintenance, we
          tailor our approach to meet your needs.
        </p>
      </div>
      <div className="aboutSubsection">
        <h1>Why choose us</h1>
        <div className="aboutList">
          <li>Experienced & Professional Team</li>
          <li>Affordable & Transparent Pricing</li>
          <li>Eco-Friendly Practices</li>
          <li>Reliable & On-Time Service</li>
          <li>Satisfaction Guaranteed</li>
          <li>Locally Owned & Trusted</li>
        </div>
      </div>
    </div>
  );
};

export default About;
