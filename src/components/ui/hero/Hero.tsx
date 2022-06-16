import "./hero.css";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__image" />
      <div className="hero__texts">
        <h1 className="hero__title">More than just shorter links</h1>
        <p className="paragraph">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
};
