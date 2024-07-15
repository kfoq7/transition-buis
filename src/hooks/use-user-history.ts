import { getUserHistory } from '@/services/user-history.service'
import { useQuery } from '@tanstack/react-query'

interface Params {
  userId: number
}

export function useUserHistory({ userId }: Params) {
  const { data, isLoading } = useQuery({
    queryKey: ['user-history', userId],
    queryFn: () => getUserHistory(userId)
  })

  const historyRoutes = data?.data

  return { historyRoutes, isLoading }
}
