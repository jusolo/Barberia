import React from "react";
import "./Testimoniales.css";

function Testimoniales() {
  return (
    <div className="h-screen" id="testimoniales">
      <h2 className="uppercase text-white text-4xl font-bold w-80 underline underline-offset-8 decoration-orange-600 mb-3 ml-40">
        Testimonials
      </h2>
      <p className="text-gray-300 text-sm w-60 mb-6 ml-40">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="flex flex-row gap-5 ml-40 mt-10">
        <div className="bg-zinc-900 w-80 h-auto p-5 flex gap-5">
          <div className="img-profile w-52 h-10 rounded-full"></div>
          <div>
            <p className="uppercase text-white font-semibold">Jhon Moore</p>
            <p className="text-white text-xs font-thin">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
              vel voluptatem. Eius nobis nisi, adipisci nulla quod at cumque
              perspiciatis eos possimus ipsam tenetur architecto. Consequuntur
              nam excepturi assumenda voluptate.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 w-80 h-auto p-5 flex gap-5">
          <div className="img-profile w-52 h-10 rounded-full"></div>
          <div>
            <p className="uppercase text-white font-semibold">Jhon Moore</p>
            <p className="text-white text-xs font-thin">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
              vel voluptatem. Eius nobis nisi, adipisci nulla quod at cumque
              perspiciatis eos possimus ipsam tenetur architecto. Consequuntur
              nam excepturi assumenda voluptate.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 w-80 h-auto p-5 flex gap-5">
          <div className="img-profile w-52 h-10 rounded-full"></div>
          <div>
            <p className="uppercase text-white font-semibold">Jhon Moore</p>
            <p className="text-white text-xs font-thin">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
              vel voluptatem. Eius nobis nisi, adipisci nulla quod at cumque
              perspiciatis eos possimus ipsam tenetur architecto. Consequuntur
              nam excepturi assumenda voluptate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Testimoniales };
