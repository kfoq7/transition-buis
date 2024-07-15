import { useMutation } from '@tanstack/react-query'
import { createUserHistory } from '@/services/user-history.service'
import { UserHistory } from '@/types'

interface Params {
  userId?: number
}

export function useUserHistoryMutation({ userId }: Params) {
  const { mutate } = useMutation({
    mutationKey: ['user-history-create', userId],
    mutationFn: (data: Partial<UserHistory>) => createUserHistory(userId, data)
  })

  return { mutate }
}
