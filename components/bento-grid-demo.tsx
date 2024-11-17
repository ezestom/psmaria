
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
   IconClipboardCopy,
   IconFileBroken,
   IconSignature,
   IconTableColumn,
} from "@tabler/icons-react";

import Image from "next/image";
import box from "@/public/plastic-box.png";

export function BentoGridSecondDemo() {
   return (
      <BentoGrid className="w-full  mx-auto md:auto-rows-[20rem]">
         {items.map((item, i) => (
            <BentoGridItem
               key={i}
               title={item.title}
               description={item.description}
               header={item.header}
               className={item.className}
               icon={item.icon}
            />
         ))}
      </BentoGrid>
   );
}
const Skeleton = () => (
   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const CustomImage = () => (
   <>
      <Image
         src={box}
         alt="placeholder"
         className="flex flex-1 min-h-6 object-contain py-4 group h-full  rounded-xl border border-transparent dark:border-white/[0.2] shadow dark:bg-black"
      />
   </>
);
const items = [
   {
      title: "Industria Farmacéutica",
      description: "Conoce los productos para la industria farmacéutica.",
      header: <CustomImage />,
      className: "md:col-span-2",
      icon: <IconClipboardCopy className="size-8 text-neutral-500" />,
   },
   {
      title: "Insdustria Química",
      description: "Productos para la industria química.",
      header: <CustomImage />,
      className: "md:col-span-1",
      icon: <IconFileBroken className="size-8 text-neutral-500" />,
   },
   {
      title: "Industria Alimenticia",
      description: "Productos para la industria alimenticia.",
      header: <CustomImage />,
      className: "md:col-span-1",
      icon: <IconSignature className="size-8 text-neutral-500" />,
   },
   {
      title: "Insdustria de Limpieza",
      description:
         "Productos para la industria de limpieza y productos de aseo.",
      header: <CustomImage />,
      className: "md:col-span-2",
      icon: <IconTableColumn className="size-8 text-neutral-500" />,
   },
];
