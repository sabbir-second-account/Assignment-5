import { Suspense } from "react";
import Hero from "./Components/Hero";
import "./index.css";
import Navbar from "./Components/Navbar";
import Technology from "./Components/Technology/Technology";
import type { ITechnology } from "./Type/types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer";

const fetchTechnology = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");

  const data = await res.json();

  return data;
};


const technologyPromise = fetchTechnology()



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
      <Suspense
        fallback={<p className="text-center text-gray-500 py-4">What's up? </p>}
      >
        <Technology technologyPromise={technologyPromise } />
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
