import { useMutation } from '@tanstack/react-query'
import { login } from '@/services/user.service'
import { User } from '@/types'

export function useLogin() {
  const { mutate } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: { email: string; password: string }) => login(data)
  })

  return { mutate }
}
