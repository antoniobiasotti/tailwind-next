import { Logo } from './Logo'
import { Search } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="px-5 py-8 space-y-6 border-r-zinc-200 border-2 border-fuchsia-600">
      <Logo />

      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="s-5 text-zinc-500" />
        <input
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
        />
      </div>
    </aside>
  )
}
