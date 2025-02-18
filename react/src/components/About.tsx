import "./About.css";

const About = () => {
  return (
    <div className="aboutWrapper">
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
            Experienced & Professional Team – Our skilled lawn care experts
            ensure precision and quality in every job.
          </li>
          <li>
            Affordable & Transparent Pricing - No hidden costs; just fair and
            competitive rates for top-quality service.
          </li>
          <li>
            Eco-Friendly Practices - We use sustainable methods and equipment to
            keep your lawn healthy and green.
          </li>
          <li>
            Reliable & On-Time Service - We respect your schedule and always
            arrive on time for your lawn care needs.
          </li>
          <li>
            Satisfaction Guaranteed - We take pride in our work and ensure
            you’re happy with every service.
          </li>
          <li>
            Locally Owned & Trusted - A community-focused business dedicated to
            serving our neighbors with excellence.
          </li>
        </div>
      </div>
    </div>
  );
};

export default About;
