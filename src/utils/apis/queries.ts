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

export async function fetchInfiniteData(
  media: string,
  pageNum: number,
  params?: any
) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/${media}?page=${pageNum}`,
      {
        headers: {
          Authorization: `Bearer ${IMDB_TOKEN}`,
        },
        params,
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    return error;
  }
}

export async function fetchInfiniteSearchResults(
  searchInput: string,
  pageParam: number
) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?query=${searchInput}&page=${pageParam}`,
      {
        headers: {
          Authorization: `Bearer ${IMDB_TOKEN}`,
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    return error;
  }
}

// https://api.themoviedb.org/3/movie/614930?api_key=c3913f726cde9ba73b0b7211ecfc40b9
