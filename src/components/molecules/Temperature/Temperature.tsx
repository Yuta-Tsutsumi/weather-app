import React from "react";
import styles from "./Temperature.module.scss";

export const Temperature: React.FC = () => {
  return (
    <div className={styles.aaa}>
      <div>
        <p>0月0日 現在時刻</p>
        <h1>現在地</h1>
        <h1>0℃</h1>
        <p>体感温度:0℃ 最高気温:0℃ 最低気温:0℃</p>
        <p>風:0m/s北寄りの風 気圧0hPa 湿度:0%</p>
        <h2>1時間ごとの予測</h2>
      </div>
    </div>
  );
};
