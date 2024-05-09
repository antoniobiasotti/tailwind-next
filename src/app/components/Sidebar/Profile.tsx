import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/antoniobiasotti.png"
        className="w-10 h-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-zinc-700">
          Antonio Biasotti
        </span>
        <span className="text-sm text-zinc-500">dev.bia@gmail.com</span>
      </div>
      <button
        type="button"
        className="ml-auto p-2 hover:bg-zinc-50 rounded-medium"
      >
        <LogOut className="w-5 h-5 text-zinc-500" />
      </button>
    </div>
  )
}
