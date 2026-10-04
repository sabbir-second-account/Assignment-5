import { Suspense } from "react";
import Hero from "./Components/Hero";
import "./index.css";
import Navbar from "./Components/Navbar";
import Technology from "./Components/Technology/Technology";
import type { ITechnology } from "./Type/types";

const technologyPromise = async (): Promise<ITechnology[]> => {
  const res = await fetch("/public/data.json");

  const data = await res.json();

  return data;
};

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense
        fallback={<p className="text-center text-gray-500 py-4">What's up? </p>}
      >
        <Technology technologyPromise={technologyPromise()} />
      </Suspense>
    </>
  );
}

export default App;
