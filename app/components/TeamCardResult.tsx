import React from "react";
import { TeamWithResult } from "../lib/types";
import {
   CheckCircle2Icon,
   Circle,
   CircleCheck,
   User,
   XCircleIcon,
} from "lucide-react";

const TeamCardResult = ({
   answered_question,

   leader_name,
   id,

   team_name,
   correct,
}: TeamWithResult) => {
   return (
      <li
         className={`relative flex flex-col gap-[2vw] lg:gap-[0.8vw] w-[90vw] lg:w-[27vw] pl-[4vw] lg:px-[2vw] py-[2vw] lg:py-[1vw] border-1 ${!correct ? "border-red-500" : "border-[#14A84D]"} rounded-lg`}
      >
         <div className="flex items-center gap-[2vw] lg:gap-[0.7vw]">
            {correct ? (
               <CheckCircle2Icon className="text-[#14A84D]" />
            ) : (
               <XCircleIcon className="text-red-500" />
            )}
            <div className="flex flex-col">
               <h3 className="text-[#2c2c2c] text-xl font-bold ">
                  {team_name}
               </h3>
            </div>
         </div>
         <div className="flex flex-col text-[2.75vw] lg:text-[0.8vw] text-[#2c2c2c]/80 ">
            <p>Captain: {leader_name}</p>
            <p>Answered Questions: {answered_question}</p>
         </div>
         {id === localStorage.getItem("token") && (
            <span className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/2 text-[#2c2c2c] ">
               {" "}
               <User />
            </span>
         )}
      </li>
   );
};

export default TeamCardResult;
