import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import Genre from "../entities/Genre";
import APIClient from "../services/api-client";

const genreService = new APIClient<Genre>("/genres");

function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });
}

export default useGenres;
