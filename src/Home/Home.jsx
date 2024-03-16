import React from "react";
import rocketdab from "../img/rocketdab.png";
const Home = () => {
  return (
    <div className="max-w-4xl mx-auto max-h-screen">
      <div className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 h-auto mt-12">
        <div className="sm:w-1/2 ">
          <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
            We Boldy Go{" "}
            <span className="text-indigo-300">Where No Rocket </span>Has Gone
            Before...
          </h2>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            fugiat culpa consectetur quos .
          </p>
        </div>
        <img className="w-1/2" src={rocketdab} alt="rocketdab" />
      </div>

      <div className="flex justify-center p-6 items-center gap-8 mb-12 h-auto mt-12">
        <div className="flex justify-center items-center">
          <button className="max-w-md text-2xl font-bold text-center sm:text-2xl sm:text-left text-slate-900 dark:text-white border rounded-3xl px-12 bg-teal-500 py-1">
            Click Me
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button className="max-w-md text-2xl font-bold text-center sm:text-2xl sm:text-left text-slate-900 dark:text-white border rounded-3xl px-12  bg-teal-500 py-1">
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
