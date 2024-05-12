import StarTrekMovies from "./components/StarTrekMovies";

function App() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-5 p-3">
      <h1 className="w-full border-b-4 border-solid border-sky-600 pb-4 text-center">
        TypeScript playground
      </h1>
      <StarTrekMovies />
    </div>
  );
}

export default App;
