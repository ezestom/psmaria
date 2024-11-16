import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
   const words = ["de calidad,", "ecónomicos,", "competitivos,", "variados,"];

   return (
      <div className="flex-col font-normal flex xl:items-start gap-4">
         <h1 className="text-7xl font-black tracking-tighter sm:text-5xl xl:text-8xl/none  dark:text-white flex flex-col text-[#046db5]">
            <span className="text-5xl xl:text-7xl text-black ">
               Plásticos </span>Santa María
         </h1>
         <div className="md:text-5xl text-3xl -tracking-wider opacity-50 font-bold">
            Productos <FlipWords words={words} /> <br />
            <span className="">para tu negocio.</span>
         </div>
      </div>
   );
}
