import { useQuery } from "@tanstack/react-query";
import platformServices from "../services/platformServices";

const usePlaforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: platformServices.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
})

export default usePlaforms;