const page = () => {
   return (
      <main className="py-[4vw] flex flex-col gap-[3vw] px-[2vw]">
         <h1 className="text-3xl font-bold text-center">Ready na Kayo</h1>
         <div className="grid grid-cols-[23vw_auto]">
            <aside className="">
               <h2 className="text-xl text-center">Mga Koponan</h2>
               <ul className="grid grid-cols-2 gap-[1vw] text-md px-[1vw] mt-[2vw]">
                  <li className="flex flex-col items-center justify-center w-[10rem] h-[10rem] border-1 rounded-md border-black/30 bg-green-300">
                     <p>Team Burat</p>
                     <p>Score: 4</p>
                  </li>
                  <li className="flex flex-col items-center justify-center w-[10rem] h-[10rem] border-1 rounded-md border-black/30 bg-green-300">
                     <p>Team Burat</p>
                     <p>Score: 4</p>
                  </li>
                  <li className="flex flex-col items-center justify-center w-[10rem] h-[10rem] border-1 rounded-md border-black/30 ">
                     <p>Team Burat</p>
                     <p>Score: 4</p>
                  </li>
                  <li className="flex flex-col items-center justify-center w-[10rem] h-[10rem] border-1 rounded-md border-black/30 ">
                     <p>Team Burat</p>
                     <p>Score: 4</p>
                  </li>
                  <li className="flex flex-col items-center justify-center w-[10rem] h-[10rem] border-1 rounded-md border-black/30 ">
                     <p>Team Burat</p>
                     <p>Score: 4</p>
                  </li>
               </ul>
            </aside>
            <div className="flex items-center justify-center flex-col gap-3">
               <button className="border-1 px-[3vw] py-[1vw] border-black/40 rounded-md cursor-pointer">
                  START
               </button>
               <p>Team Ready 3/5</p>
            </div>
         </div>
      </main>
   );
};

export default page;
