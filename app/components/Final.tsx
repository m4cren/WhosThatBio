import React, { useEffect, useState } from "react";
import { PhaseType, TeamWithId, TeamWithResult } from "../lib/types";
import { db } from "../lib/firebase/client";
import { deleteDoc, doc, onSnapshot } from "firebase/firestore";
import Ranking from "./Ranking";
import { useTeamList } from "../context/TeamListContextProvider";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
const Final = ({
   switchPhase,
}: {
   switchPhase: (state: PhaseType) => void;
}) => {
   const router = useRouter();
   const { teams } = useTeamList();
   const [myTeam, setMyTeam] = useState<TeamWithResult>();
   const token = localStorage.getItem("token");
   if (!token) return;
   const teamRef = doc(db, "teams", token!);

   const average = ((myTeam?.answered_question! / 12) * 100).toFixed(2);

   useEffect(() => {
      const unsub = onSnapshot(teamRef, (snapshot) => {
         const docData = snapshot.data() as TeamWithResult;

         if (!docData) return;

         setMyTeam(docData);
      });

      () => unsub();
   }, []);

   return (
      <motion.div
         initial={{ x: -100, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.4, ease: "easeOut" }}
         className="flex flex-col gap-8 items-center py-[8vw] px-[5vw]"
      >
         <div className="border-1 border-black/30 rounded-md p-8 w-[80vw] flex flex-col items-center gap-6">
            <h1>
               Team Name:{" "}
               <span className="text-2xl font-bold">{myTeam?.team_name}</span>
            </h1>
            <div
               className={`rounded-full ${parseInt(average) > 80 ? "bg-[#14A84D]" : parseInt(average) > 60 ? "bg-[#d6c13d]" : "bg-red-500"} w-24 h-24 flex items-center justify-center text-[#ececec] font-bold text-2xl`}
            >
               <p className="text-center">{myTeam?.answered_question} / 12</p>
            </div>
            <p>Average: {average}%</p>
            <button
               onClick={async () => {
                  const teamRef = doc(
                     db,
                     "teams",
                     localStorage.getItem("token")!,
                  );
                  await deleteDoc(teamRef);
                  localStorage.removeItem("phase");
                  localStorage.removeItem("token");
                  switchPhase("TeamName");
               }}
               className="cursor-pointer bg-gradient-to-r from-[#1FBE5A] to-[#14A84D] text-[#f5f5f5] font-bold px-[8vw] rounded-4xl text-[5vw] py-[2vw] disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-200 disabled:opacity-70"
            >
               Logout
            </button>
         </div>
         <Ranking teams={teams} />
      </motion.div>
   );
};

export default Final;
