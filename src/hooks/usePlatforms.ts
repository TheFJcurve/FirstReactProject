import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/apiClient";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlaforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => 
        apiClient
            .get<FetchResponse<Platform>>('/platforms/lists/parents')
            .then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
})

export default usePlaforms;