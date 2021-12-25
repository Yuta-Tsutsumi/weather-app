import React from "react";
import styles from "./Button.module.scss";

export const Button: React.FC = () => {
  return (
    <div>
      <button className={styles.button} type="submit">
        送信
      </button>
    </div>
  );
};
