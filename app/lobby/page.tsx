const page = () => {
   return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
         <h2 className="text-2xl text-[#2c2c2c] font-bold mb-[40vw]">
            Get ready for the QUIZZZ
         </h2>
         <button className="cursor-pointer  bg-gradient-to-r text-[#f5f5f5] font-bold px-[12vw] rounded-lg text-[4.5vw] py-[2vw] from-[#1FBE5A] to-[#14A84D]">
            Ready
         </button>
         <p>Team ready: 2/5</p>
      </div>
   );
};

export default page;
