import "./Services.css";

const Services = () => {
  return (
    <div className="servicesWrapper" id="services">
      <h1>Our services</h1>
      <div className="services">
        <div className="serviceCard">
          <div className="serviceTitle">1. 🌱 Grass cutting</div>
          <p>
            A well-maintained lawn starts with regular mowing. Our team ensures
            an even cut tailored to your grass type and growth rate. We adjust
            cutting heights based on the season for optimal lawn health.
          </p>
          <button className="mainButton secondaryButton">Learn more</button>
        </div>
        <div className="serviceCard">
          <div className="serviceTitle">2. ✂️ Edging & border trimming</div>
          <p>
            Crisp, clean edges make a huge difference in your lawn’s appearance.
            Our edging service defines the borders of sidewalks, driveways, and
            flower beds for a polished, well-kept look.
          </p>
          <button className="mainButton secondaryButton">Learn more</button>
        </div>
        <div className="serviceCard">
          <div className="serviceTitle">
            3. 💧 Lawn watering & fertilization
          </div>
          <p>
            A healthy lawn needs proper nourishment. We provide watering and
            fertilization services to keep your grass lush, green, and thriving.
          </p>
          <button className="mainButton secondaryButton">Learn more</button>
        </div>
        <div className="serviceCard">
          <div className="serviceTitle">4. 🍂 Leaf & debris cleanup</div>
          <p>
            Seasonal changes bring fallen leaves and debris. We clean up your
            lawn, so it stays tidy and well-maintained year-round.
          </p>
          <button className="mainButton secondaryButton">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
