import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import genres from "../data/genres";
import genreServices from "../entities/genreServices";

const useGenres = () => useQuery({
        queryKey: ['genres'],
        queryFn: genreServices.getAll,
        staleTime: ms("24h"),
        initialData: genres
    });


export default useGenres;