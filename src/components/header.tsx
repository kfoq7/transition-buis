'use client'

import { useRouter } from 'next/navigation'

export function Header() {
  const router = useRouter()

  return (
    <header className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between gap-x-2 pb-4">
        <button onClick={() => router.push('/profile')}>User</button>

        <input
          type="search"
          className="w-full md:w-auto focus:outline-none rounded-lg px-2 py-1 bg-gray-200/80"
        />
      </div>
    </header>
  )
}
