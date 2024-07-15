'use client'

import { useRouter } from 'next/navigation'
import { ProfileIcon } from './icons/profile-icon'

export function Header() {
  const router = useRouter()

  return (
    <header className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between gap-x-2 pb-4">
        <button onClick={() => router.push('/profile')}>
          <ProfileIcon className="size-8" />
        </button>
      </div>
    </header>
  )
}
