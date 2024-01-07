import { useQuery } from '@tanstack/react-query'
import gameServices from '../services/gameServices'


const useGame = (slug: string) => useQuery({
    queryKey: ['game', slug],
    queryFn: () => gameServices.get(slug),
})
export default useGame