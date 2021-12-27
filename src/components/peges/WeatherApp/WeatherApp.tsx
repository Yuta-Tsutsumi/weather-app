import React from "react";
import { Button } from "../../../components/atoms/Button/Button";
import { Input } from "../../../components/atoms/Input/Input";
import styles from "./WeatherApp.module.scss";

export const WeatherApp: React.FC = () => {
  return (
    <form className={styles.App}>
      <div className={styles.WeatherApp}>
        <div className={styles.InputTest}>
          <label className={styles.label}>都市名</label>
          <Input />
        </div>
        <div className={styles.InputButton}>
          <Button />
        </div>
      </div>
    </form>
  );
};
