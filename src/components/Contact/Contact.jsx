import React from "react";
import './Contact.css';

function Contact() {
  return (
    <div className="h-screen flex w-full px-40" id="contact">
      <div className="img-contact w-1/2"></div>
      <div className="w-1/2 bg-zinc-900 pt-8">
        <div className="mt-5 ml-10">
          <h2 className="uppercase text-white text-4xl font-bold w-80 underline underline-offset-8 decoration-orange-600 mb-3">
            Book a seat
          </h2>
          <p className="text-gray-300 text-sm w-60 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="bg-zinc-900 p-10 clear-both">
          <div className="flex flex-col gap-5">
            <input type="date" name="" id="date" className="bg-transparent border border-gray-300 h-10 p-4 text-gray-300"/>
            <input type="time" name="" id="hour" className="bg-transparent border border-gray-300 h-10 p-4 text-gray-300"/>
            <select name="" id="" className="pl-4 bg-transparent border border-gray-300 h-10 text-gray-300">
              <option value="" selected>Select our branch</option>
            </select>
            <input type="number" name="" id="" className="bg-transparent border border-gray-300 h-10 p-4 text-gray-300" placeholder="Number"/>
            <button className="w-36 h-12 text-white border border-orange-600 hover:bg-orange-600 hover:duration-300">Book now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Contact };
