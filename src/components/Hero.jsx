import hero from "../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Master Coding. Build Your Future.</h1>

        <p>
          Practice coding problems, improve your skills,
          and prepare for technical interviews.
        </p>

        <div className="hero-buttons">
          <button>Start Solving</button>
          <button>Explore Problems</button>
        </div>
      </div>

      <img src={hero} alt="Hero" />
    </section>
  );
}

export default Hero;