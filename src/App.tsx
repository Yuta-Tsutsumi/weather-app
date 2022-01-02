import React from "react";
import WeatherApp from "./components/pages/WeatherApp/WeatherApp";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <WeatherApp />
    </div>
  );
};

export default App;
