import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchResponse } from "../services/apiClient";
import { Game } from "../services/gameServices";

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: () => 
    apiClient
      .get<FetchResponse<Game>>('/games', {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText
        }
      })
      .then((res) => res.data),
  staleTime: 1000 * 60 * 10, // 10 minutes
})

export default useGames