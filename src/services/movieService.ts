import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Movie } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

interface FetchMoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  console.log("TOKEN:", TOKEN);
  const response: AxiosResponse<FetchMoviesResponse> = await axios.get(
    `${API_URL}/search/movie`,
    {
      params: {
        query,
        include_adult: false,
        language: "en-US",
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        Accept: "application/json",
      },
    }
  );
  return response.data.results;
};

/*import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Movie } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3/search/movie";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

interface FetchMoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  console.log("TOKEN:", TOKEN);
  const response: AxiosResponse<FetchMoviesResponse> = await axios.get(
    API_URL,
    {
      params: {
        query,
        include_adult: false,
        language: "en-US",
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        Accept: "application/json",
      },
    }
  );
  return response.data.results;
};*/
