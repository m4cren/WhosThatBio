"use client";
import Image from "next/image";
import { useQuestion } from "../context/QuestionContextProvider";
import { sampleQuestion } from "../lib/questions";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../lib/firebase/client";
import { motion } from "framer-motion";
const Question = () => {
   const { currentQuestion } = useQuestion();
   const [isChecking, setIsChecking] = useState<boolean>(false);
   const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
   const [isImgLoading, setIsImgLoading] = useState<boolean>(true);
   useEffect(() => {
      setSelectedAnswer(null);
      const timer = setTimeout(() => {
         setIsChecking(true);
      }, 11500);

      return () => {
         clearTimeout(timer);
      };
   }, []);

   useEffect(() => {
      const checkAns = async () => {
         if (!localStorage.getItem("token")) return;
         const teamRef = doc(db, "teams", localStorage.getItem("token")!);
         const teamSnap = await getDoc(teamRef);

         if (!teamSnap.exists()) return;
         const teamData = teamSnap.data();

         const current_answered = teamData.answered_question! ?? 0;
         if (
            selectedAnswer === sampleQuestion[currentQuestion].correctAns &&
            isChecking
         ) {
            await updateDoc(teamRef, {
               answered_question: current_answered + 1,
               correct: true,
            });
         } else {
            await updateDoc(teamRef, {
               correct: false,
            });
         }
      };
      checkAns();
   }, [selectedAnswer, isChecking]);
   return (
      <motion.div
         initial={{ x: -100, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.4, ease: "easeOut" }}
      >
         <div className="timer  bg-gradient-to-r from-[#1FBE5A] to-[#14A84D] h-[6vw] "></div>
         <div className="flex w-full flex-col items-center gap-[5vw] mt-[35vw]">
            <h2 className="font-bold text-2xl text-center">
               Waht da f*k is dat?
            </h2>
            {isImgLoading && (
               <span className="loading loading-infinity loading-[12rem]" />
            )}
            <Image
               src={`/Questions/${sampleQuestion[currentQuestion].img}.png`}
               alt="question"
               width={300}
               height={300}
               onLoad={() => setIsImgLoading(false)}
            />

            <ul className="grid grid-cols-2 w-[95vw] gap-[2vw]">
               {sampleQuestion[currentQuestion].choice.map(({ key, label }) => (
                  <li
                     key={label}
                     onClick={() => setSelectedAnswer(key)}
                     className={`flex items-center justify-center rounded-md px-18 py-8 ${selectedAnswer === key ? "bg-transparent border-1 border-[#1FBE5A] text-[#1FBE5A]" : "bg-gradient-to-r from-[#1FBE5A] to-[#14A84D] text-[#ececec]"}`}
                  >
                     <h4 className=" font-bold text-xl">{label}</h4>
                  </li>
               ))}
            </ul>
         </div>
      </motion.div>
   );
};

export default Question;
