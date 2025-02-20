import "./How.css";

const How = () => {
  return (
    <section className="howWrapper">
      <div className="howContent">
        <div className="howCard">
          <h1>How to book</h1>
        </div>
        <div className="steps">
          <div className="stepCard">
            <div className="stepTitle">1. 📄 Get a free quote</div>
            <p>
              Tell us about your lawn care needs by filling out our quick online
              form or giving us a call. We’ll provide a transparent,
              no-obligation quote tailored to your requirements.
            </p>
            <button className="mainButton"> Get a free quote</button>
          </div>
          <div className="stepCard">
            <div className="stepTitle">2. 📅 Schedule your service</div>
            <p>
              Choose a convenient date and time that fits your schedule. Our
              professional team will arrive on time, ready to make your lawn
              look its best.
            </p>
          </div>
          <div className="stepCard">
            <div className="stepTitle">3. 😊 Enjoy a perfect lawn</div>
            <p>
              Sit back and relax while we handle the hard work. Whether it’s
              mowing, edging, or trimming, we ensure your lawn looks fresh,
              clean, and beautifully maintained.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
