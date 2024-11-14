export function Subtitle({ subtitle, paragraph }: { subtitle: string, paragraph: string }) {
   return (
      <div>
         <h2 className="text-3xl sm:text-5xl tracking-tighter font-black flex flex-col text-center text-gray-900 my-8 sm:my-28 gap-y-2">
            {subtitle}
            {/* add a line */}
            <span className='text-xl sm:text-2xl opacity-50 -tracking-wider font-bold'>
               {paragraph}
            </span>
            <hr className="w-20 h-1 bg-primary my-4 mx-auto" />
         </h2>
      </div>
   );
}