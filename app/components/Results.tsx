import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { CheckCircle2Icon, XCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useQuestion } from "../context/QuestionContextProvider";
import { db } from "../lib/firebase/client";
import Image from "next/image";
import ReactConfetti from "react-confetti";
import { motion } from "framer-motion";
const Results = () => {
   const [result, setResult] = useState<boolean | null>(null);
   const {
      previousAns: { img, label },
   } = useQuestion();
   const teamRef = doc(db, "teams", localStorage.getItem("token")!);
   useEffect(() => {
      const unsub = onSnapshot(teamRef, (snapshot) => {
         const docData = snapshot.data();

         if (!docData) return;
         setResult(docData.correct);
      });

      return () => unsub();
   }, []);

   return (
      <motion.div
         initial={{ x: -100, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.4, ease: "easeOut" }}
         className="h-screen flex flex-col gap-[4vw] items-center justify-start"
      >
         <ReactConfetti className="w-full h-screen" run={result ?? false} />
         <Image
            width={350}
            height={350}
            src={`/Answer/${img}.png`}
            alt="correct img"
         />
         <div className="flex flex-col items-center gap-7">
            {result ? (
               <>
                  <CheckCircle2Icon className="text-[#1FBE5A]" size={100} />
                  <Image
                     src={"/correct.png"}
                     alt="correct"
                     width={175}
                     height={175}
                  />
               </>
            ) : (
               <>
                  <XCircleIcon className="text-red-500" size={100} />
                  <Image
                     src={"/wrong.png"}
                     alt="correct"
                     width={175}
                     height={175}
                  />
               </>
            )}
            <h2 className="text-xl">
               Ang aking kasagutan ayy,
               <span className="font-bold"> {label}</span>
            </h2>
         </div>
         <p className="text-sm text-[#2c2c2c]/40">
            Wait for the admin for next question
         </p>
      </motion.div>
   );
};

export default Results;
