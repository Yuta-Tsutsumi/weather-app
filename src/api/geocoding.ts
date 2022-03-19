import axios from "axios";

// Google Mapが提供している以下のエンドポイントを叩いて、住所から緯度/経度を取得する関数を作成する。
// APIのドキュメントURL：https://developers.google.com/maps/documentation/geocoding/start
// APIエンドポイント：https://maps.googleapis.com/maps/api/geocode/json

// onSearchSubmitという名前で関数を定義し、引数はterm。非同期通信をしたい場合はasyncをつける事。
export const geocoding = async (address: string) => {
  try {
    const endpoint = "https://maps.googleapis.com/maps/api/geocode/json";
    //ジオコードのAPIキー
    const apiKey = "AIzaSyAntz8OQsFZfMOtTLMSQvUnYRFlmSRRAwA";
    //const response = await axios.get("URLを入力すること");
    const response = await axios.get(endpoint, {
      params: { address, key: apiKey },
      //↑「address: address」を省略し、「address」と記入している。
    });
    //14行目から17行目の値のresponseを返している。
    console.log(response);

    // 緯度・経度をresponseから抽出
    // 検証からコンソール画面にいったときの参照データの階層
    const location = response.data.results[0].geometry.location;

    // 緯度・経度を返却する
    return location;
  } catch (error) {
    //catch文はHTTP通信が失敗した場合の処理を書く。alertで写真の取得に失敗しました。と表示。
    console.error(error);
    alert("住所から緯度/経度の取得に失敗しました");
    console.log(error);
  }
};
