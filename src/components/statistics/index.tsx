import { StatisticsList } from "./StatisticsList";
import "./statistics.css";

export const Statistics = () => {
  return (
    <section className="statistics">
      <div className="section__texts">
        <h2 className="section__title">Advanced Statistics</h2>
        <p className="paragraph">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <StatisticsList />
    </section>
  );
};
