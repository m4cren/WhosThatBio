export default function Home() {
   return (
      <main>
         <div className="flex flex-col gap-8 justify-center items-center h-screen">
            <h2 className="text-2xl font-bold text-[#2c2c2c]">
               Enter you team name
            </h2>
            <input
               type="text"
               className="border-1 text-[#2c2c2c] border-black/30 outline-none rounded-md px-[2vw] py-[2vw] w-[85vw] text-center"
            />
            <button className="cursor-pointer  bg-gradient-to-r text-[#f5f5f5] font-bold px-[12vw] rounded-lg text-[4.5vw] py-[2vw] from-[#1FBE5A] to-[#14A84D]">
               Join
            </button>
         </div>
      </main>
   );
}
