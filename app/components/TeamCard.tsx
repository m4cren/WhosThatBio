import { TeamTypes } from "@/app/lib/types";
import { Circle, CircleCheck, User } from "lucide-react";
import React from "react";

const TeamCard = ({
   answered_question,
   isReady,
   leader_name,
   id,
   member_count,
   team_name,
}: TeamTypes) => {
   console.log(id, localStorage.getItem("token"));
   return (
      <li
         className={`relative flex flex-col gap-[2vw] lg:gap-[0.8vw] w-[90vw] lg:w-[27vw] pl-[4vw] lg:px-[2vw] py-[2vw] lg:py-[1vw] border-1 ${!isReady ? "border-[#2c2c2c]/30" : "border-[#14A84D]"} rounded-lg`}
      >
         <div className="flex items-center gap-[2vw] lg:gap-[0.7vw]">
            {!isReady ? (
               <Circle color="#2c2c2c" opacity={0.3} />
            ) : (
               <CircleCheck color="#14A84D" />
            )}
            <div className="flex flex-col">
               <h3 className="text-[#2c2c2c] text-xl font-bold ">
                  {team_name}
               </h3>
               <p className="text-[2.75vw] lg:text-[0.9vw] text-[#2c2c2c]/80">
                  {member_count} members
               </p>
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

export default TeamCard;
