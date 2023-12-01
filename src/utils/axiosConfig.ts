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

apiFetch.interceptors.request.use((config) => {
  const userKey = getAuthDetails().key;
  const userSecret = getAuthDetails().secret;

  if (userKey && userSecret) {
    const { method, url, data } = config;
    let bodyString = "";
    if (data) {
      bodyString = JSON.stringify(data);
    }

    const stringToSign = `${method?.toUpperCase()}${url}${bodyString}${userSecret}`;

    const sign = CryptoJS.MD5(stringToSign).toString();

    console.log(stringToSign);
    console.log(sign);

    config.headers["Key"] = userKey;
    config.headers["Sign"] = sign;
  }
  return config;
});
