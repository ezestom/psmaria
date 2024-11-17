import { cn } from "@/lib/utils";

export const BentoGrid = ({
   className,
   children,
}: {
   className?: string;
   children?: React.ReactNode;
}) => {
   return (
      <div
         className={cn(
            "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-[1440px] mx-auto  sm:px-12 px-4 ",
            className
         )}
      >
         {children}
      </div>
   );
};

export const BentoGridItem = ({
   className,
   title,
   description,
   header,
   icon,
}: {
   className?: string;
   title?: string | React.ReactNode;
   description?: string | React.ReactNode;
   header?: React.ReactNode;
   icon?: React.ReactNode;
}) => {
   return (
      <div
         className={cn(
            "row-span-1  rounded-xl group/bento  hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 sm:p-8  dark:bg-black dark:border-white/[0.2] bg-white border justify-between flex flex-col space-y-4 hover:group-bg-neutral-50",
            className
         )}
      >
         {header}
         <div className="group-hover/bento:translate-x-2 transition duration-200">
            {icon}
            <div className="font-sans font-semibold text-xl dark:text-neutral-200 mb-2 mt-2">
               {title}
            </div>
            <div className="font-sans font-normal opacity-75  text-base dark:text-neutral-300">
               {description}
            </div>
         </div>
      </div>
   );
};
