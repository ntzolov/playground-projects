import { useEffect, useState } from "react";
import StarTrekMovies from "./components/StarTrekMovies";
import { useLoading } from "./hooks/useLoading";

function App() {
  const [isLoading, load] = useLoading();
  const [welcomeMsg, setWelcomeMsg] = useState<string>("Fake loading state");

  useEffect(() => {
    load(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(setWelcomeMsg("You are good to go!"));
        }, 3000);
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(welcomeMsg);
  }, [welcomeMsg]);

  return (
    <div className="flex h-full w-full flex-col items-center gap-5 p-3">
      {isLoading ? (
        <p className="text-center text-3xl font-bold">Loading...</p>
      ) : (
        <>
          <h1 className="w-full border-b-4 border-solid border-sky-600 pb-4 text-center">
            TypeScript playground
          </h1>
          <StarTrekMovies />
        </>
      )}
    </div>
  );
}

export default App;
