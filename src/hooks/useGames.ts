import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/apiClient";
import gameServices, { Game } from "../services/gameServices";

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: ({ pageParam = 1 }) => 
    gameServices.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      }
    }),
  staleTime: ms("24h"), // 24 hours 
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.next? allPages.length + 1 : undefined;
  },
  initialPageParam: 1
})

export default useGames