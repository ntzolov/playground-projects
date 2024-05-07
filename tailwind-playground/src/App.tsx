import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex gap-1">
        <p className="flex items-center text-2xl">
          This is a playground for Tailwind with -{" "}
        </p>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} alt="Vite logo" className="h-20 w-20" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} alt="React logo" className="h-20 w-20" />
        </a>
      </div>

      <hr />

      <section className="flex items-center gap-5">
        <p className="text-lg text-orange-600">
          How many times you can click me?
        </p>
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => setCount((count) => count + 1)}
        >
          {count}
        </button>
      </section>

      <hr />

      <nav className="w-screen">
        <ul className="flex items-center justify-evenly">
          <li className="rounded-md bg-green-400 px-4 py-2 font-semibold text-slate-700 hover:cursor-pointer hover:text-slate-950 hover:shadow-md">
            <a href="https://vitejs.dev/guide/features.html" target="_blank">
              Vite Features
            </a>
          </li>
          <li className="rounded-md bg-green-400 px-4 py-2 font-semibold text-slate-700 hover:cursor-pointer hover:text-slate-950 hover:shadow-md">
            <a
              href="https://reactjs.org/docs/getting-started.html"
              target="_blank"
            >
              React Docs
            </a>
          </li>
        </ul>
      </nav>

      <hr />

      <section className="flex justify-evenly">
        <div className="size-10 bg-red-500"></div>
        <div className="size-10 bg-yellow-500"></div>
        <div className="size-10 bg-blue-500"></div>
        <div className="size-10 bg-green-500"></div>
        <div className="size-10 bg-purple-500"></div>
        <div className="size-10 bg-violet-500"></div>
        <div className="size-10 bg-amber-500"></div>
        <div className="size-10 bg-pink-500"></div>
        <div className="size-10 bg-black"></div>
        <div className="size-10 bg-slate-500"></div>
        <div className="size-10 bg-lime-500"></div>
      </section>

      <p className="mt-auto text-lg">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
