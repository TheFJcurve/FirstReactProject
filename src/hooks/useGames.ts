import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/apiClient";
import gameServices, { Game } from "../services/gameServices";

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: ({ pageParam = 1 }) => 
    gameServices.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      }
    }),
  staleTime: 1000 * 60 * 10, // 10 minutes
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.next? allPages.length + 1 : undefined;
  },
  initialPageParam: 1
})

export default useGames