import { serviceItems } from "@/utils";
import Image from "next/image";
import React from "react";

const Solutions = () => {
  return (
    <main id="services" className="scroll-mt-28 mt-32">
      <div className="container w-10/12 mx-auto flex flex-col items-center">
        <h2 className="text-4xl w-2/5 text-center">
          Innovative solutions for operational excellence
        </h2>
        <p className=" w-2/5 text-center mt-5 text-secondary-gray">
          Tailored DevOps expertise driving your business momentum. Personalized
          solutions for growth and evolution.
        </p>
        <section className="grid grid-cols-3 place-items-start gap-5 mt-10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1220px] h-[396px] bg-indigo-950/60 rounded-full blur-[300px]" />
          {serviceItems.map((item, idx) => (
            <div
              key={item.id}
              className="relative bg-gradient-to-b from-blue-900/40 to-slate-900 rounded-2xl shadow border border-blue-400/30 "
            >
              <div className="card-head">
                <Image src={item.img} alt={`aboutItemCard${idx}`} />
              </div>
              <div className="card-body flex flex-col justify-center px-7 py-3 min-h-52 space-y-2 mt-3">
                <h2 className="text-xl">{item.title}</h2>
                <p className="text-secondary-gray">{item.description}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Solutions;
