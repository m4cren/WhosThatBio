"use client";
import React, { useRef, useState } from "react";
import { PhaseType } from "../lib/types";

interface Props {
   switchPhase: (switchTo: PhaseType) => void;
}

const EnterTeam = ({ switchPhase }: Props) => {
   const inputRef = useRef<HTMLInputElement | null>(null);
   const [errMsg, setErrMsg] = useState<string>("");
   return (
      <div className="flex flex-col gap-8 justify-center items-center h-screen">
         <h2 className="text-2xl font-bold text-[#2c2c2c]">
            {errMsg ? errMsg : "Enter you team name"}
         </h2>
         <input
            type="text"
            ref={inputRef}
            className="border-1 text-[#2c2c2c] border-black/30 outline-none rounded-md px-[2vw] py-[2vw] w-[85vw] text-center"
         />
         <button
            onClick={() => {
               if (!inputRef.current?.value) {
                  setErrMsg("Lagay ka name please :<");
               } else if (inputRef.current?.value.length <= 3) {
                  setErrMsg("Ang ikli naman nan");
               } else {
                  localStorage.setItem("teamName", inputRef.current.value);
                  switchPhase("TeamDetails");
               }
            }}
            className="cursor-pointer  bg-gradient-to-r text-[#f5f5f5] font-bold px-[12vw] rounded-lg text-[4.5vw] py-[2vw] from-[#1FBE5A] to-[#14A84D]"
         >
            Next
         </button>
      </div>
   );
};

export default EnterTeam;
