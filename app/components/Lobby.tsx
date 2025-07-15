"use client";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { CheckCheck } from "lucide-react";
import { useTeamList } from "../context/TeamListContextProvider";
import { db } from "../lib/firebase/client";
import TeamLists from "./TeamLists";
import Heading from "./Heading";
import { useEffect, useState } from "react";
import { useQuestion } from "../context/QuestionContextProvider";
import { motion } from "framer-motion";
const Lobby = () => {
   const token = localStorage.getItem("token")!;

   const { team_count, team_ready, teams } = useTeamList();
   const { onReady } = useQuestion();

   const [isReady, setIsReady] = useState<boolean>(false);

   useEffect(() => {
      if (!token) return;
      const teamRef = doc(db, "teams", token);

      const unsub = onSnapshot(teamRef, (snapshot) => {
         if (snapshot.exists()) {
            const data = snapshot.data();
            setIsReady(data.isReady);
         }
      });
      return () => unsub();
   }, []);

   return (
      <motion.div
         initial={{ x: -100, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.4, ease: "easeOut" }}
         className="flex flex-col items-center gap-[8vw] py-[8vw]"
      >
         <Heading />

         <div>
            <p className="text-sm text-[#2c2c2c]/50">Team name:</p>
            <h1 className="text-2xl font-bold text-[#2c2c2c]">
               {localStorage.getItem("teamName")!}
            </h1>
         </div>
         <button
            onClick={() => onReady(token)}
            disabled={isReady}
            className="cursor-pointer bg-gradient-to-r from-[#1FBE5A] to-[#14A84D] text-[#f5f5f5] font-bold px-[18vw] rounded-lg text-[5vw] py-[3vw] 
disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-200 disabled:opacity-70"
         >
            {isReady ? "Wait ka lang" : "Ready"}
         </button>
         <div className="flex items-center gap-4">
            {team_ready === team_count ? (
               <CheckCheck color="#1FBE5A" />
            ) : (
               <span className="loading loading-dots text-[#2c2c2c] opacity-50" />
            )}

            <p className="opacity-60 text-[#2c2c2c]">
               Team ready {team_ready}/{team_count}
            </p>
         </div>
         <TeamLists teams={teams} />
      </motion.div>
   );
};

export default Lobby;
