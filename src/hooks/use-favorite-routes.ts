import { useQuery } from '@tanstack/react-query'

export function useFavoriteRoutes() {
  const { data: favoriteRoutes, isLoading } = useQuery({
    queryKey: ['favorites-routes']
    // queryFn: getFavorites
  })

  return { favoriteRoutes, isLoading }
}
