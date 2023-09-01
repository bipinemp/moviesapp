import axios, { AxiosRequestConfig } from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const IMDB_TOKEN = process.env.NEXT_PUBLIC_IMDB_TOKEN;

const headers = {
  Authorization: `bearer ${IMDB_TOKEN}`,
};

export async function fetchData(url: string) {
  try {
    const config: AxiosRequestConfig = {
      headers: headers,
    };

    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    return error;
  }
}
