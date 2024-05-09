import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import flowersImage from "./assets/flowers.png";
import { FaHamburger } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  useEffect(() => {
    console.log(isHamburgerOpen);
  }, [isHamburgerOpen]);

  return (
    <>
      <div
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
        className="fixed right-5 top-5 z-10 cursor-pointer sm:hidden"
      >
        <FaHamburger size={20} color="red" />
      </div>

      {/* <nav className="flex-center h-full w-full gap-10 bg-teal-300 text-2xl font-medium text-zinc-800"> */}
      <ul
        className={`${!isHamburgerOpen ? "hidden" : "flex-center flex-col"} fixed left-0 top-0 h-screen w-screen gap-10 bg-teal-300 text-2xl font-medium text-zinc-600`}
      >
        <li>
          <a href="#">test</a>
        </li>
        <li>
          <a href="#">test</a>
        </li>
        <li>
          <a href="#">test</a>
        </li>
      </ul>
      {/* </nav> */}

      <div className="flex h-full w-full flex-col px-2">
        <div className="flex-center mt-10 flex-wrap gap-1 text-center">
          <p className="flex items-center text-2xl">
            This is a playground for Tailwind with
          </p>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} alt="Vite logo" className="h-20 w-20" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} alt="React logo" className="h-20 w-20" />
          </a>
        </div>

        <hr />

        <section className="flex-center gap-5">
          <p className="border-b-2 text-lg text-blue-600">
            How many times can you click me?
          </p>
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={() => setCount((count) => count + 1)}
          >
            {count}
          </button>
        </section>

        <hr />

        <nav className="w-full">
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

        <section className="peer grid grid-cols-3 justify-items-center gap-3">
          <div className="peer/red size-10 bg-red-500"></div>
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
          <div className="hidden peer-hover/red:block">RED</div>
        </section>
        <p className="peer-hover:flex-center mt-5 hidden justify-center text-lg peer-hover:block">
          This is the whole group hovered
        </p>

        <hr />

        <div className="flex items-center justify-center gap-10">
          <p className="text-lg font-medium">Predefined components</p>
          <button className="predefined">Click me!</button>
        </div>

        <hr />

        <div className="flex-center">
          <div className="relative h-40 w-40 transform bg-green-400 text-xl transition hover:scale-110">
            <img
              src={flowersImage}
              alt="flower image"
              className="absolute -left-16 bottom-0 h-auto w-52"
            />
          </div>
        </div>

        <hr />

        <div className="flex-center">
          <div className="h-[200px] w-[200px] bg-yellow-200">
            <div className="animate-moveInCircle size-[50px] bg-purple-500"></div>
          </div>
        </div>

        <hr />

        <p className="mt-auto self-center text-lg">
          Click on the Vite and React logos to learn more
        </p>

        <div className="fixed bottom-5 right-5">😄</div>
      </div>
    </>
  );
}

export default App;
