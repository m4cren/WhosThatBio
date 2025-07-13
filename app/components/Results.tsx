import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { CheckCircle2Icon, XCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useQuestion } from "../context/QuestionContextProvider";
import { db } from "../lib/firebase/client";
import Image from "next/image";

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
      <div className="h-screen flex flex-col gap-[8vw] items-center justify-center">
         <Image
            width={200}
            height={200}
            src={`/Answer/${img}.png`}
            alt="correct img"
         />
         <div className="flex flex-col items-center gap-7">
            {result ? (
               <CheckCircle2Icon className="text-[#1FBE5A]" size={100} />
            ) : (
               <XCircleIcon className="text-red-500" size={100} />
            )}
            <h2 className="text-xl font-bold">
               The Correct Answer is: {label}
            </h2>
         </div>
         <p className="text-sm text-[#2c2c2c]/50">
            Wait for the admin for next question
         </p>
      </div>
   );
};

export default Results;
