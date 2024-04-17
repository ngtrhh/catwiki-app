export const THECAT_API_URL = "https://api.thecatapi.com/v1";
export const THECAT_API_KEY = "";

var headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("x-api-key", THECAT_API_KEY);

export const requestOptions = {
  method: "GET",
  headers: headers,
  redirect: "follow",
};
