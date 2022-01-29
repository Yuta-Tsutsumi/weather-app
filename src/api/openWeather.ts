import axios from "axios";

export const fetchTodayForecast = async () => {
  try {
    const apiKey = "c6a862db0ad7ac1360b43d3dff990690";
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/onecall",
      {
        params: {
          // 緯度
          lat: 36,
          // 経度
          lon: 140,
          exclude: "current,minutely,hourly,alerts",
          appid: apiKey,
          units: "metric",
        },
      }
    );
    return response;
  } catch (err) {
    throw err;
  }
};
