import React from "react";
import TodayForecast from "../../molecules/TodayForecast/TodayForecast";
import SearchForm from "../../molecules/SearchForm/SearchForm";
import HourlyForecastGraph from "../../molecules/HourlyForecastGraph/HourlyForecastGraph";
import WeeklyForecast from "../../molecules/WeeklyForecast/WeeklyForecast";
import GoogleMap from "../../molecules/GoogleMap/GoogleMap";
import styles from "./WeatherApp.module.scss";

const WeatherApp: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <SearchForm />
      </div>
      <div className={styles.middle}>
        <TodayForecast />
        <GoogleMap />
      </div>
      <div className={styles.bottom}>
        <HourlyForecastGraph />
        <WeeklyForecast />
      </div>
    </div>
  );
};

export default WeatherApp;
