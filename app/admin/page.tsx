import {
   BadgeQuestionMark,
   Circle,
   CircleCheck,
   CircleDot,
   Loader,
} from "lucide-react";

const page = () => {
   return (
      <main className="py-[4vw] flex flex-col gap-[5vw] px-[8vw]">
         <h1 className="text-[#2c2c2c] text-4xl font-bold text-center flex items-center justify-center gap-[1vw]">
            <svg
               className="w-7 h-7 text-[#14A84D]"
               fill="currentColor"
               viewBox="0 0 24 24"
            >
               <path d="M12 2l3.09 6.26L22 9l-6.91 1.01L12 16l-3.09-6.99L2 9l6.91-.74L12 2z" />
            </svg>
            Who is that Pokemon?
         </h1>
         <div className="flex items-center justify-between ">
            <div className="flex items-center gap-4">
               <Loader size={30} opacity={0.5} />
               <div>
                  <h4 className="text-[#2c2c2c] font-bold text-[1.2vw]">
                     Quiz Status
                  </h4>
                  <p className="opacity-60 text-[#2c2c2c]">Team ready 1/5</p>
               </div>
            </div>
            <div>
               <button className="cursor-pointer flex items-center gap-2 bg-gradient-to-r text-[#f5f5f5] font-bold px-[2vw] rounded-lg text-[1.1vw] py-[0.6vw] from-[#1FBE5A] to-[#14A84D]">
                  <svg
                     className="w-10 h-10"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        strokeWidth="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 110 5H9V10z"
                     />
                  </svg>
                  Start Quiz
               </button>
            </div>
         </div>
         <div className="flex flex-col gap-[2vw]">
            <h1 className="text-[#2c2c2c] text-3xl font-bold flex items-center gap-4">
               <svg
                  className="w-10 h-10 text-[#14A84D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
               >
                  <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     strokeWidth="2"
                     d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
               </svg>
               Registered Teams
            </h1>
            <ul className="grid grid-cols-3 gap-[1vw]">
               <li className="flex flex-col gap-[0.8vw] w-[27vw] px-[2vw] py-[1vw] border-1 border-[#2c2c2c]/30 rounded-lg">
                  <div className="flex items-center gap-[0.7vw]">
                     <Circle />
                     <div className="flex flex-col">
                        <h3 className="text-[#2c2c2c] text-xl font-bold">
                           Forest Guardians
                        </h3>
                        <p className="text-[0.9vw] text-[#2c2c2c]/80">
                           4 members
                        </p>
                     </div>
                  </div>
                  <div className="flex flex-col text-[0.8vw] text-[#2c2c2c]/80">
                     <p>Captain: Sarah G.</p>
                     <p>Ready since: 2:15 PM</p>
                  </div>
               </li>
               <li className="flex flex-col gap-[0.8vw] w-[27vw] px-[2vw] py-[1vw] border-1 border-[#2c2c2c]/30 rounded-lg">
                  <div className="flex items-center gap-[0.7vw]">
                     <Circle />
                     <div className="flex flex-col">
                        <h3 className="text-[#2c2c2c] text-xl font-bold">
                           Forest Guardians
                        </h3>
                        <p className="text-[0.9vw] text-[#2c2c2c]/80">
                           4 members
                        </p>
                     </div>
                  </div>
                  <div className="flex flex-col text-[0.8vw] text-[#2c2c2c]/80">
                     <p>Captain: Sarah G.</p>
                     <p>Ready since: 2:15 PM</p>
                  </div>
               </li>
               <li className="flex flex-col gap-[0.8vw] w-[27vw] px-[2vw] py-[1vw] border-1 border-[#2c2c2c]/30 rounded-lg">
                  <div className="flex items-center gap-[0.7vw]">
                     <Circle />
                     <div className="flex flex-col">
                        <h3 className="text-[#2c2c2c] text-xl font-bold">
                           Forest Guardians
                        </h3>
                        <p className="text-[0.9vw] text-[#2c2c2c]/80">
                           4 members
                        </p>
                     </div>
                  </div>
                  <div className="flex flex-col text-[0.8vw] text-[#2c2c2c]/80">
                     <p>Captain: Sarah G.</p>
                     <p>Ready since: 2:15 PM</p>
                  </div>
               </li>
               <li className="flex flex-col gap-[0.8vw] w-[27vw] px-[2vw] py-[1vw] border-1 border-[#2c2c2c]/30 rounded-lg">
                  <div className="flex items-center gap-[0.7vw]">
                     <Circle />
                     <div className="flex flex-col">
                        <h3 className="text-[#2c2c2c] text-xl font-bold">
                           Forest Guardians
                        </h3>
                        <p className="text-[0.9vw] text-[#2c2c2c]/80">
                           4 members
                        </p>
                     </div>
                  </div>
                  <div className="flex flex-col text-[0.8vw] text-[#2c2c2c]/80">
                     <p>Captain: Sarah G.</p>
                     <p>Ready since: 2:15 PM</p>
                  </div>
               </li>
               <li className="flex flex-col gap-[0.8vw] w-[27vw] px-[2vw] py-[1vw] border-1  border-[#14A84D] rounded-lg">
                  <div className="flex items-center gap-[0.7vw]">
                     <CircleCheck color="#14A84D" />
                     <div className="flex flex-col">
                        <h3 className="text-[#2c2c2c] text-xl font-bold">
                           Forest Guardians
                        </h3>
                        <p className="text-[0.9vw] text-[#2c2c2c]/80">
                           4 members
                        </p>
                     </div>
                  </div>
                  <div className="flex flex-col text-[0.8vw] text-[#2c2c2c]/80">
                     <p>Captain: Sarah G.</p>
                     <p>Ready since: 2:15 PM</p>
                  </div>
               </li>
            </ul>
         </div>
      </main>
   );
};

export default page;
