export default function Home() {
  return (
    <div className="p-8 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 h-screen flex flex-col items-center text-center">
      <div className="max-w-2xl">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-antoniobia hover:text-violet-400">Rapidly build modern websites without ever leaving your HTML.</h1>
        <ul role="list" className="marker:text-sky-400 list-disc mt-4 pl-5 space-y-3 text-slate-400 dark:text-slate-400">
          <li>A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</li>
        </ul>
        <button className="bg-sky-500 dark:bg-sky-400 dark:text-sky-950 text-white px-4 py-2 rounded-md font-medium mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed">
            Sign In  
        </button>    
        {/* before:w-2.5 before:h-16 before:bg-sky-500 before:flex   
        
        <form className="bg-slate-500 flex justify-center items-center rounded-md py-4">
          <div className="border-green-200 rounded-md">
          <div className="bg-slate-600 p-5 flex flex-col">
              <label>User</label>
              <input className="placeholder: rounded-md"></input>
              <label>Password</label>
              <input className="placeholder: rounded-md"></input>
              </div>
              <footer className="bg-slate-700 justify-center">
              <span>Forgot your password?</span>
            </footer>
          </div>
        </form> */}
      </div>
    </div>
  )
}