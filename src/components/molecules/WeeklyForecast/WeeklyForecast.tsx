import React from "react";
import styles from "./WeeklyForecast.module.scss";

const WeeklyForecast: React.VFC = () => {
  return (
    <div className={styles.date}>
      <h1>7日間の予測</h1>
      <div>
        <p>4月1日　　0/0℃</p>
        <p>4月2日　　0/0℃</p>
        <p>4月3日　　0/0℃</p>
        <p>4月4日　　0/0℃</p>
        <p>4月5日　　0/0℃</p>
        <p>4月6日　　0/0℃</p>
      </div>
    </div>
  );
};

export default WeeklyForecast;
