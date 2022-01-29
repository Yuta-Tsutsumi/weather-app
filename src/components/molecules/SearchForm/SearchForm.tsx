import React from "react";
import { Button } from "../../../components/atoms/Button/Button";
import { Input } from "../../../components/atoms/Input/Input";
import { fetchTodayForecast } from "../../../api/openWeather";
import styles from "./SearchForm.module.scss";

const SearchForm: React.VFC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const todayForecast = await fetchTodayForecast();
      console.log({ todayForecast });
    } catch (err) {
      alert("天気情報の取得に失敗しました");
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.root}>
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
