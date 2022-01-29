import React from "react";
import styles from "./TodayForecast.module.scss";

const number = 0;
const TodayForecast: React.VFC = () => {
  return (
    <div className={styles.root}>
      <div>
        <div className={styles.month}>0月0日 現在時刻</div>
        <div className={styles.position}>現在地</div>
        <div className={styles.thermo}>0℃</div>
        <div className={styles.temperature}>
          {/* 体感温度: 0℃　最高気温: 0℃　最低気温: 0℃ */}
          <span>体感温度: {number}℃</span>
          <span>最高温度: {number}℃</span>
          <span>最低温度: {number}℃</span>
        </div>
        <div className={styles.wind}>
          {/* 風: 0m/s 北寄りの風　気圧: 0hPa　湿度: 0% */}
          <span>風: {number}m/s 北寄りの風</span>
          <span>気圧: {number}hPa</span>
          <span>湿度 {number}%</span>
        </div>
      </div>
    </div>
  );
};

export default TodayForecast;
