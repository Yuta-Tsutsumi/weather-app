import React from "react";
import { WeatherApp } from "./components/peges/WeatherApp/WeatherApp";
import { Temperature } from "./components/molecules/Temperature/Temperature";
import { Date } from "./components/molecules/Date/Date";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <WeatherApp />
      <Temperature />
      <Date />
    </div>
  );
};

export default App;
