export default function Home() {
  return (
    <div className="p-8 bg-slate-900 text-slate-300 h-screen">
      <h1 className="flex items-center gap-3 font-bold text-3xl sm:text-5xl lg:text-6xl text-antoniobia hover:text-violet-400 before:w-0.5 before:h-8 before:bg-sky-500 before:flex">
        Hello Tailwind
      </h1>
      <ul
        role="list"
        className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400"
      >
        <li>Hello Tailwind</li>
        <li>Hello Tailwind</li>
      </ul>
      <form className="bg-slate-500 flex justify-center items-center rounded-md py-4">
        <div className="border-green-200 rounded-md">
          <div className="bg-slate-600 p-5 flex flex-col">
            <label>User</label>
            <input className="placeholder: rounded-md"></input>
            <label>Password</label>
            <input className="placeholder: rounded-md"></input>
          </div>
          <footer className="flex flex-col gap-2 items-center bg-slate-700">
            <button
              disabled
              className="px-2 py-2 border-[0.5px] rounded-md text-sky-500 font-semibold mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Sign In
            </button>
            <span className="hover:underline">Forgot your password?</span>
            <span className="hover:underline">
              Don't have an account? Create one
            </span>
          </footer>
        </div>
      </form>
    </div>
  )
}
