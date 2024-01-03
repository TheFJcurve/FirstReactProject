import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import genreServices from "../services/genreServices";

const useGenres = () => useQuery({
        queryKey: ['genres'],
        queryFn: genreServices.getAll,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        initialData: genres
    });


export default useGenres;