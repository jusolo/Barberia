import React, { useState, useEffect } from "react";
import axios from "axios";

function Shop() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="h-screen mt-20" id="shop">
      <h2 className="uppercase text-white text-4xl font-bold w-80 underline underline-offset-8 decoration-orange-600 mb-3 ml-40">
        Shop
      </h2>
      <p className="text-gray-300 text-sm w-60 mb-6 ml-40">
        API utilizada <span className="text-orange-600">https://api.escuelajs.co/api/v1/products</span>
      </p>
      <div className="w-9/12 grid gap-4 grid-cols-3 ml-40 mt-10">
        {data.map((item) => (
          <div className="bg-zinc-900 p-5 flex gap-5">
            <img
              src={item.images[0]}
              alt=""
              className="w-32 h-20 rounded-full"
            />
            <div>
              <p className="uppercase text-white font-semibold">{item.title}</p>
              <p className="text-white text-xs font-thin">
                {" "}
                {item.description}
              </p>
              <p className="text-orange-600">Price: $ {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Shop };
