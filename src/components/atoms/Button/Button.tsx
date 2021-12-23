import React from "react";
import styles from "./Button.module.scss";

export const button = () => {
  return (
    <div>
      <button className={styles.button}>送信</button>
    </div>
  );
};
