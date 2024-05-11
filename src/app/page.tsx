import * as Tabs from '@radix-ui/react-tabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <Tabs.Root>
        <Tabs.List>
          <Tabs.Trigger></Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </>
  )
}
