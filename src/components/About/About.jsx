import React from "react";
import "./About.css";

function About() {
  return (
    <div className="h-screen pt-20 flex gap-10 w-full px-40" id="about">
      <div className="image-content w-1/2"></div>
      <div className="w-1/2">
        <div className="float-right">
          <h2 className="uppercase text-white text-4xl font-bold w-80 underline underline-offset-8 decoration-orange-600 mb-3">
            About Barber
          </h2>
          <p className="text-gray-300 text-sm w-60 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="bg-zinc-900 p-10 clear-both">
          <div className="mb-5">
            <p className="text-white uppercase text-sm font-bold">
              Social media
            </p>
            <ul className="text-xs text-gray-400 flex flex-col gap-2 mt-5 ml-3 leading-loose">
              <li>
                <a href="./"><i class="fa-brands fa-instagram text-orange-600 text-xl mr-5"></i> @Barbershop</a>
              </li>
              <li>
                <a href="./"><i class="fa-brands fa-twitter text-orange-600 text-xl mr-5"></i> @barbershop</a>
              </li>
              <li>
                <a href="./"><i class="fa-brands fa-facebook text-orange-600 text-xl mr-5"></i> @barbershop</a>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <p className="text-white uppercase text-sm font-bold">
              Certificates
            </p>
            <ul className="text-xs text-gray-400 flex flex-col gap-2 mt-5 ml-3 leading-loose">
              <li>2019, Barber of year</li>
              <li>2018, Best barber</li>
              <li>2017, Best barbershop</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export { About };
