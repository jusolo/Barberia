import React from "react";
import "./Card.css";

function Card({ titles, prices, descriptions, image }) {
  return (
    <div className="bg-zinc-900 w-80 h-auto p-4">
      <img
        src={image}
        alt=""
        className="w-20 bg-orange-600 rounded-full p-3 m-auto mt-5"
      />
      <div className="mb-4 mt-10">
        <div className="m-3 mb-6">
          <div className="flex justify-between uppercase text-white text-lg">
            <a href="./" className="hover:text-orange-600 hover:duration-300">
              {titles[0]}
            </a>
            <p className="text-orange-600">${prices[0]}</p>
          </div>
          <div className="text-gray-400 text-sm mt-2 w-40">
            <p>{descriptions[0]}</p>
          </div>
        </div>
        <div className="m-3">
          <div className="flex justify-between uppercase text-white text-lg">
            <a href="./" className="hover:text-orange-600 hover:duration-300">
              {titles[1]}
            </a>
            <p className="text-orange-600">${prices[1]}</p>
          </div>
          <div className="text-gray-400 text-sm mt-2 w-40">
            <p>{descriptions[1]}</p>
          </div>
        </div>
        <div className="m-3">
          <div className="flex justify-between uppercase text-white text-lg">
            <a href="./" className="hover:text-orange-600 hover:duration-300">
              {titles[2]}
            </a>
            <p className="text-orange-600">${prices[2]}</p>
          </div>
          <div className="text-gray-400 text-sm mt-2 w-40">
            <p>{descriptions[2]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Card };
