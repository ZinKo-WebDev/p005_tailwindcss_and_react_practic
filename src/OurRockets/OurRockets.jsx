import React from "react";
import rocketlaunch from "../img/rocketlaunch.png";
import rocketman from "../img/rocketman.png";
import rocketride from "../img/rocketride.png";

const OurRockets = () => {
  return (
    <div className="p-6 my-6 scroll-mt-20">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-slate-900 dark:text-white">
        Our Rockets
      </h2>
      <ul className="list-none max-w-6xl mx-auto my-6 flex flex-col sm:flex-row items-center gap-8">
        <li className="w-2/3 sm:w-5/6 flex flex-col dark:bg-black items-center border bordersolid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-2xl shadow-xl">
          <img src={rocketlaunch} alt="rocketlaunch" className="mb-6 w-1/2" />
          <h3 className="text-3xl text-center text-slate-900 dark:text-white">
            Lorem.
          </h3>
          <p className="sm:hidden mt-2 text-2xl text-center text-slate-900 dark:text-slate-400 ">
            Lorem.
          </p>
        </li>
        <li className="w-2/3 sm:w-5/6 flex flex-col dark:bg-black items-center border bordersolid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-2xl shadow-xl">
          <img src={rocketman} alt="rocketman" className="mb-6 w-1/2" />
          <h3 className="text-3xl text-center text-slate-900 dark:text-white">
            Lorem.
          </h3>
          <p className="sm:hidden mt-2 text-2xl text-center text-slate-900 dark:text-slate-400 ">
            Lorem.
          </p>
        </li>
        <li className="w-2/3 sm:w-5/6 flex flex-col dark:bg-black items-center border bordersolid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-2xl shadow-xl">
          <img src={rocketride} alt="rocketride" className="mb-6 w-1/2" />
          <h3 className="text-3xl text-center text-slate-900 dark:text-white">
            Lorem.
          </h3>
          <p className="sm:hidden mt-2 text-2xl text-center text-slate-900 dark:text-slate-400 ">
            Lorem.
          </p>
        </li>
      </ul>
      <ul className="list-none max-w-6xl mx-auto my-6 flex flex-col sm:flex-row items-center gap-8">
        <li className="w-2/3 sm:w-5/6 flex flex-col dark:bg-black items-center border bordersolid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-2xl shadow-xl">
          <img src={rocketlaunch} alt="rocketlaunch" className="mb-6 w-1/2" />
          <h3 className="text-3xl text-center text-slate-900 dark:text-white">
            Lorem.
          </h3>
          <p className="sm:hidden mt-2 text-2xl text-center text-slate-900 dark:text-slate-400 ">
            Lorem.
          </p>
        </li>
        <li className="w-2/3 sm:w-5/6 flex flex-col dark:bg-black items-center border bordersolid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-2xl shadow-xl">
          <img src={rocketman} alt="rocketman" className="mb-6 w-1/2" />
          <h3 className="text-3xl text-center text-slate-900 dark:text-white">
            Lorem.
          </h3>
          <p className="sm:hidden mt-2 text-2xl text-center text-slate-900 dark:text-slate-400 ">
            Lorem.
          </p>
        </li>
        <li className="w-2/3 sm:w-5/6 flex flex-col dark:bg-black items-center border bordersolid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-2xl shadow-xl">
          <img src={rocketride} alt="rocketride" className="mb-6 w-1/2" />
          <h3 className="text-3xl text-center text-slate-900 dark:text-white">
            Lorem.
          </h3>
          <p className="sm:hidden mt-2 text-2xl text-center text-slate-900 dark:text-slate-400 ">
            Lorem.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default OurRockets;
