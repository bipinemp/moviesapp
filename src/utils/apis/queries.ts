import axios from "axios";

const IMDB_TOKEN = process.env.NEXT_PUBLIC_IMDB_TOKEN;

export async function fetchData(url: string) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3${url}`, {
      headers: {
        Authorization: `Bearer ${IMDB_TOKEN}`,
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    return error;
  }
}
