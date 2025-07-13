import React from "react";

const Heading = () => {
   return (
      <h1 className="text-[#2c2c2c] text-3xl lg:text-4xl font-bold text-center flex items-center justify-center gap-[1vw]">
         <svg
            className="w-7 h-7 text-[#14A84D]"
            fill="currentColor"
            viewBox="0 0 24 24"
         >
            <path d="M12 2l3.09 6.26L22 9l-6.91 1.01L12 16l-3.09-6.99L2 9l6.91-.74L12 2z" />
         </svg>
         Who is that Pokemon?
      </h1>
   );
};

export default Heading;
