import axios from "axios";

// Google Mapが提供している以下のエンドポイントを叩いて、住所から緯度/経度を取得する関数を作成する
// APIのドキュメントURL：https://developers.google.com/maps/documentation/geocoding/start
// APIエンドポイント：https://maps.googleapis.com/maps/api/geocode/json
export const geocoding = async (address: string) => {
  try {
    const endpoint = "https://maps.googleapis.com/maps/api/geocode/json";
    const apiKey = "";
    const response = await axios.get(endpoint, {
      params: { address: address, key: apiKey },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
    alert("住所から緯度/経度の取得に失敗しました");
  }
};
