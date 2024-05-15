import { useState } from "react";

export function useLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const load = (aPromise: Promise<unknown>) => {
    setIsLoading(true);
    return aPromise.finally(() => setIsLoading(false));
  };
  return [isLoading, load] as const; // infers [boolean, typeof load] instead of (boolean | typeof load)[]
}