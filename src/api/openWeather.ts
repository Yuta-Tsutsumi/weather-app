import axios from "axios";

//非同期通信を行う際は「async」をつける
export const fetchTodayForecast = async () => {
  //処理が正常のときはtryの中身が処理される。（try catch(err)構文）
  try {
    const apiKey = "c6a862db0ad7ac1360b43d3dff990690";
    //awaitは非同期通信において処理が終わるまで次の行に行かないようにする記述。
    //ブラウザ側からバックエンド側にジオコードのデータをわたす処理を実装
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
