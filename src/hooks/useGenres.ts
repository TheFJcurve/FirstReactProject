import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/apiClient";
import genres from "../data/genres";
import { Genre } from "../services/genreServices";

const useGenres = () => useQuery({
        queryKey: ['genres'],
        queryFn: () => 
        apiClient
            .get<FetchResponse<Genre>>('/genres')
            .then((res) => res.data),
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        initialData: {count: genres.length, results: genres}
    });


export default useGenres;