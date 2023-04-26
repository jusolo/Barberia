import React from "react";
import "./Card.css";

function Card({ titles, prices, descriptions, image }) {
  return (
    <div className="bg-zinc-900 w-48 py-4">
      <img
        src={image}
        alt=""
        className="w-12 bg-orange-600 rounded-full p-3 m-auto"
      />
      <div className="mb-4">
        <div className="m-3">
          <div className="flex justify-between uppercase text-white text-sm">
            <a href="./" className="">
              {titles[0]}
            </a>
            <p className="text-orange-600">${prices[0]}</p>
          </div>
          <div className="text-gray-400 text-xs mt-2">
            <p>{descriptions[0]}</p>
          </div>
        </div>
        <div className="m-3">
          <div className="flex justify-between uppercase text-white text-sm">
            <a href="./" className="">
              {titles[1]}
            </a>
            <p className="text-orange-600">${prices[1]}</p>
          </div>
          <div className="text-gray-400 text-xs mt-2">
            <p>{descriptions[1]}</p>
          </div>
        </div>
        <div className="m-3">
          <div className="flex justify-between uppercase text-white text-sm">
            <a href="./" className="">
              {titles[2]}
            </a>
            <p className="text-orange-600">${prices[2]}</p>
          </div>
          <div className="text-gray-400 text-xs mt-2">
            <p>{descriptions[2]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Card };
