import React from "react";
import styles from "./Date.module.scss";

export const Date: React.FC = () => {
  return (
    <div className={styles.ccc}>
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
