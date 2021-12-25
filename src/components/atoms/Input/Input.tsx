import React from "react";
import styles from "./Input.module.scss";

export const Input: React.FC = () => {
  return (
    <div>
      <input className={styles.input} type="text" placeholder="名前" />
    </div>
  );
};
