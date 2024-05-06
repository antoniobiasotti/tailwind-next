import { Logo } from './Logo'

export function Sidebar() {
  return (
    <aside className="px-5 py-8 border-r-zinc-200 border-2 border-fuchsia-600">
      <Logo />

      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"></div>
    </aside>
  )
}
