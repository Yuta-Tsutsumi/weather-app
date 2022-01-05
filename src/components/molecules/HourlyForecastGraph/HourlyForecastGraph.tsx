import React from "react";
import styles from "./HourlyForecastGraph.module.scss";

const HourlyForecastGraph: React.VFC = () => {
  return (
    <div>
      <div className={styles.time}>1時間ごとの予測</div>
      <div className={styles.HourlyForecastGraph}></div>
    </div>
  );
};

export default HourlyForecastGraph;
