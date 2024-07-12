import { User } from '@/types'
import { useMutation } from '@tanstack/react-query'
import { register } from '@/services/user.service'

export function useRegister() {
  const { data, mutate } = useMutation({
    mutationKey: ['register'],
    mutationFn: (data: User) => register(data)
  })

  return { data, mutate }
}
