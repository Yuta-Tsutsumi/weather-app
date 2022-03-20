import React, { useState } from "react";
import { geocoding } from "../../../api/geocoding";
import { fetchTodayForecast } from "../../../api/openWeather";
import styles from "./SearchForm.module.scss";

const SearchForm: React.VFC = () => {
  // 入力欄に入力された値を保持するための変数
  // location：実際に値が代入される変数、setLocation：locationの値を更新するための関数
  const [location, setLocation] = useState<string>("");

  // 検索ボタンが押されたときに発火する関数
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      // デフォルトではページ全体をリロードしてしまうので、event.preventDefaultメソッドを使って、
      //submitイベントの発生元であるフォームが持つデフォルトの動作（リロード）をキャンセルするメソッドです。
      // https://qiita.com/yokoto/items/27c56ebc4b818167ef9e
      e.preventDefault();

      // valueの（入力欄に入力された）値をconsoleに出力している
      console.log({ location });

      // 入力された場所の緯度経度を取得する
      const geocodingRes = await geocoding(location);
      console.log({ geocodingRes });

      // 緯度経度を元に、その場所の天気情報を取得する
      // const todayForecast = await fetchTodayForecast();
      // console.log({ todayForecast });
    } catch (err) {
      alert("天気情報の取得に失敗しました");
    }
  };

  // lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key} ← あってる？

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.root}>
      <label className={styles.label}>都市名</label>
      <div className={styles.WeatherApp}>
        <div className={styles.InputTest}>
          <input
            className={styles.input}
            type="text"
            placeholder="（例）東京"
            // ④value="" -> value="い" -> 画面上に”い”と表示される
            value={location}
            // ①入力欄に変更を加えようとしたときに発火する
            onChange={(e) => {
              // locationにe.target.value（inputに入力した値）を代入している
              setLocation(e.target.value);
              // ②e.target.value="い"
              // ③setLocation("い") -> location==""からlocation=="い"に変更される
            }}
          />
        </div>
        <div className={styles.InputButton}>
          {/* ボタンをクリックすると、formタグのonSubmitに指定されている関数が発火する */}
          <button className={styles.button} type="submit">
            検索
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
