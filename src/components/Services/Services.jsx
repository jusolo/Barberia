import React from "react";
import { Card } from "../Card/Card";
import "./Services.css";

function Services() {
  const titles = ["Classic", "Deluxe", "Kids"];
  const prices = [20, 40, 15];
  const descriptions = [
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
  ];
  return (
    <div className="h-screen pt-20 mb-20" id="services">
      <div className="ml-40">
        <h2 className="uppercase text-white text-4xl font-bold w-80 underline underline-offset-8 decoration-orange-600 mb-3">
          Our Services
        </h2>
        <p className="text-gray-300 text-sm w-60 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex gap-10 justify-center">
        <Card
          image="https://cdn-icons-png.flaticon.com/512/2821/2821023.png"
          titles={titles}
          prices={prices}
          descriptions={descriptions}
        />
        <Card
          image="https://cdn-icons-png.flaticon.com/512/2291/2291727.png"
          titles={titles}
          prices={prices}
          descriptions={descriptions}
        />
        <Card
          image="https://cdn-icons-png.flaticon.com/512/1005/1005650.png"
          titles={titles}
          prices={prices}
          descriptions={descriptions}
        />
      </div>
    </div>
  );
}

export { Services };
