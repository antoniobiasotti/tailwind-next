import { SettingsTabs } from './components/SettingsTabs/index'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button type="button">Cancel</button>
            <button type="submit" form="settings">
              Save
            </button>
          </div>
        </div>

        <form id="settings"></form>
      </div>
    </>
  )
}
