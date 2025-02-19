import "./About.css";

const About = () => {
  return (
    <div className="aboutWrapper" id="about">
      <div className="aboutSubsection">
        <h1>Quality and eco-friendly service</h1>
        <p>
          At [Company Name], we take pride in providing top-quality lawn care
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
          <li>
            Experienced & Professional Team – our skilled lawn care experts
            ensure precision and quality in every job.
          </li>
          <li>
            Affordable & Transparent Pricing - no hidden costs; just fair and
            competitive rates for top-quality service.
          </li>
          <li>
            Eco-Friendly Practices - we use sustainable methods and equipment to
            keep your lawn healthy and green.
          </li>
          <li>
            Reliable & On-Time Service - we respect your schedule and always
            arrive on time for your lawn care needs.
          </li>
          <li>
            Satisfaction Guaranteed - we take pride in our work and ensure
            you’re happy with every service.
          </li>
          <li>
            Locally Owned & Trusted - a community-focused business dedicated to
            serving our neighbors with excellence.
          </li>
        </div>
      </div>
    </div>
  );
};

export default About;
