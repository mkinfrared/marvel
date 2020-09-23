import axios from "axios";
import md5 from "md5";

import { MARVEL_PRIVATE_KEY, MARVEL_PUBLIC_KEY } from "utils/secrets";

const marvelApi = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public"
});

marvelApi.interceptors.request.use((config) => {
  const ts = new Date().toISOString();
  const apikey = MARVEL_PUBLIC_KEY;
  const value = ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY;
  const hash = md5(value);

  return {
    ...config,
    params: {
      ...config.params,
      ts,
      apikey,
      hash
    }
  };
});

export default marvelApi;
