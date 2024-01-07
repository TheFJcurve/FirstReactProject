import { useQuery } from "@tanstack/react-query";
import parents from "../data/platforms";
import platformServices from "../services/platformServices";
import ms from "ms";

const usePlaforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: platformServices.getAll,
    staleTime: ms("24h"),
    initialData: parents
})

export default usePlaforms;