import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import Platform from "../entities/Platform";
import APIClient from "../services/api-client";

const platformService = new APIClient<Platform>("/platforms/lists/parents");

function usePlatforms() {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });
}

export default usePlatforms;
