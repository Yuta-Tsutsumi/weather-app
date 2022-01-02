import React from "react";
import { Button } from "../../../components/atoms/Button/Button";
import { Input } from "../../../components/atoms/Input/Input";
import styles from "./SearchForm.module.scss";

const SearchForm: React.VFC = () => {
  return (
    <form className={styles.root}>
      <label className={styles.label}>都市名</label>
      <div className={styles.WeatherApp}>
        <div className={styles.InputTest}>
          <Input />
        </div>
        <div className={styles.InputButton}>
          <Button />
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
