import { CustomDivider } from "../custom";

export const StatisticsList = () => {
  return (
    <div className="section__statistics">
      {/* Card start */}
      <div className="card">
        <div className="card__icon">
          <img src="/images/icon-brand-recognition.svg" alt="clicks" />
        </div>
        <div className="card__texts">
          <h3 className="card__title">Brand Recognition</h3>
          <p className="paragraph">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
      </div>
      {/* Card end */}
      <CustomDivider />
      {/* Card start */}
      <div className="card">
        <div className="card__icon">
          <img src="/images/icon-detailed-records.svg" alt="clicks" />
        </div>
        <div className="card__texts">
          <h3 className="card__title">Detailed Records</h3>
          <p className="paragraph">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
      </div>
      {/* Card end */}
      <CustomDivider />
      {/* Card start */}
      <div className="card">
        <div className="card__icon">
          <img src="/images/icon-fully-customizable.svg" alt="clicks" />
        </div>
        <div className="card__texts">
          <h3 className="card__title">Fully Customizable</h3>
          <p className="paragraph">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
      {/* Card end */}
    </div>
  );
};
