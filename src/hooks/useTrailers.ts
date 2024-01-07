import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Trailer } from "../services/trailerServices";

const useTrailers = (gameID: number) =>  { 
    const apiClient = new APIClient<Trailer>(`/games/${gameID}/movies`);

    return useQuery({
    queryKey: ['trailers', gameID],
    queryFn: apiClient.getAll,
})
}

export default useTrailers;