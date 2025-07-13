"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PhaseType } from "../lib/types";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../lib/firebase/client";
import { useRouter } from "next/navigation";

type FormType = {
   leader_name: string;
   member_count: number;
};

interface Props {
   switchPhase: (switchTo: PhaseType) => void;
}

const TeamDetails = ({ switchPhase }: Props) => {
   const router = useRouter();
   const {
      register,

      handleSubmit,
   } = useForm<FormType>();
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const onSubmit = (data: FormType) => {
      const finalData = {
         team_name: localStorage.getItem("teamName")!,
         isReady: false,
         answered_question: 0,
         ...data,
      };
      if (finalData) {
         const registerTeam = async () => {
            const teamRef = collection(db, "teams");

            const res = await addDoc(teamRef, {
               ...finalData,
            });
            localStorage.setItem("token", res.id);
         };
         registerTeam();
         setIsLoading(true);
         setTimeout(() => {
            switchPhase("Lobby");
            setIsLoading(false);
         }, 3000);
      }
   };
   if (isLoading) {
      return (
         <div className="flex flex-col gap-8 justify-center items-center h-screen">
            <span className="text-[#14A84D] loading loading-infinity loading-xl scale-200"></span>
         </div>
      );
   }
   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         className="flex flex-col gap-8 justify-center items-center h-screen"
      >
         <div className="flex flex-col items-center gap-[2vw]">
            <h2 className="text-2xl font-bold text-[#2c2c2c]">
               Team Leader Name
            </h2>
            <input
               type="text"
               {...register("leader_name", {
                  required: "Team name is required",
               })}
               className="border-1 text-[#2c2c2c] border-black/30 outline-none rounded-md px-[2vw] py-[2vw] w-[85vw] text-center"
            />
         </div>
         <div className="flex flex-col items-center gap-[2vw]">
            <h2 className="text-2xl font-bold text-[#2c2c2c]">Total members</h2>
            <input
               type="number"
               {...register("member_count", {
                  required: "Team count is required",
               })}
               className="border-1 text-[#2c2c2c] border-black/30 outline-none rounded-md px-[2vw] py-[2vw] w-[35vw] text-center"
            />
         </div>
         <button
            type="submit"
            className="cursor-pointer  bg-gradient-to-r text-[#f5f5f5] font-bold px-[12vw] rounded-lg text-[4.5vw] py-[2vw] from-[#1FBE5A] to-[#14A84D]"
         >
            Join
         </button>
      </form>
   );
};

export default TeamDetails;
