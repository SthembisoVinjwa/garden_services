import "./Hero.css";

const Hero = () => {
  return (
    <section className="heroWrapper">
      <img src="src/images/lawn-mower-hero.jpg" alt="picture of mowing lawn" />
      <div className="heroContent">
        <div className="heroCard">
          <p>Get a beautiful lawn without the hassle!</p>
          <h1 className="heroTitle">
            We offer professional and reliable grass cutting services.
          </h1>
          <p>
            Professional grass cutting, trimming, and edging services to keep
            your lawn looking fresh and beautiful. Reliable, affordable, and
            tailored to your needs.
          </p>
          <div className="actionRow">
            <button className="mainButton">Get a free quote</button>
            <button className="mainButton secondaryButton">
              View our services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
