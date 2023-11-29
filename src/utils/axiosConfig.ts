import axios from "axios";
import CryptoJS from "crypto-js";

export const apiFetch = axios.create({
  baseURL: "https://0001.uz/",
});

const getAuthDetails = () => {
  const userKey = localStorage.getItem("userKey");
  const userSecret = localStorage.getItem("userSecret");

  return {
    key: userKey,
    secret: userSecret,
  };
};

// Set the default Authorization header using the getAuthDetails function
apiFetch.interceptors.request.use((config) => {
  const userKey = getAuthDetails().key;
  const userSecret = getAuthDetails().secret;

  if (userKey && userSecret) {
    const { method, url, data } = config;
    let bodyString = "";
    if (data) {
      bodyString = JSON.stringify(data);
    }
    const stringToSign = `${method?.toLocaleUpperCase()}${url}${bodyString}2003`;

    const sign = CryptoJS.MD5(stringToSign).toString();
    config.headers["Key"] = userKey;
    config.headers["Sign"] = sign;
  }
  return config;
});
