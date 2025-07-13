"use client";

import {
   createContext,
   PropsWithChildren,
   useContext,
   useEffect,
   useState,
} from "react";
import { QuestionStateType } from "../lib/types";
import {
   collection,
   doc,
   getDoc,
   getDocs,
   onSnapshot,
   updateDoc,
} from "firebase/firestore";
import { db } from "../lib/firebase/client";
import { sampleQuestion } from "../lib/questions";
import { error } from "console";

interface Props {
   previousAns: {
      label: string | undefined;
      img: string;
   };
   questionState: QuestionStateType | null;
   handleQuestionState: (state: "Question" | "Result" | "Final" | null) => void;
   onReady: (token: string) => void;
   onLobby: () => void;

   currentQuestion: string;
}

const QuestionContext = createContext<Props | null>(null);

const QuestionContextProvider = ({ children }: PropsWithChildren) => {
   const [questionState, setQuestionState] = useState<QuestionStateType | null>(
      { questionState: null },
   );
   const room_id = process.env.NEXT_PUBLIC_ROOM_ID!;
   const questionRef = doc(db, "questions", room_id);
   const teamRef = collection(db, "teams");

   const [currentQuestion, setCurrentQuestion] = useState<string>("");

   const [previousAns, setPreviousAns] = useState<{
      label: string | undefined;
      img: string;
   }>({
      label: "",
      img: "",
   });

   useEffect(() => {
      const unsub = onSnapshot(questionRef, (snapshot) => {
         const docData = snapshot.data();

         if (!docData) return;

         const ques_num = docData.number;

         setCurrentQuestion(`q${ques_num}`);
      });

      return () => unsub();
   }, []);

   useEffect(() => {
      if (!currentQuestion || questionState?.questionState === "Final") return;

      try {
         const correctChoice = sampleQuestion[currentQuestion].choice.find(
            ({ key }) => key === sampleQuestion[currentQuestion].correctAns,
         );
         const correctImg = sampleQuestion[currentQuestion].correct_img;
         setPreviousAns({ label: correctChoice?.label, img: correctImg });
      } catch {
         console.log("finish");
      }
   }, [currentQuestion]);

   const onReady = async (token: string) => {
      const docRef = doc(db, "teams", token);
      await updateDoc(docRef, {
         isReady: true,
      });
   };

   const handleQuestionState = async (
      state: "Question" | "Result" | "Final" | null,
   ) => {
      await updateDoc(questionRef, {
         questionState: state,
      });

      setTimeout(async () => {
         await updateDoc(questionRef, {
            questionState: "Result",
         });
      }, 12000);
   };
   const onLobby = async () => {
      const questionSnap = await getDoc(questionRef);

      if (!questionSnap.exists()) return;
      const questionData = questionSnap.data();
      const question_num = questionData.number;
      await updateDoc(questionRef, {
         questionState: null,
         number: question_num + 1,
      });
      const snapshot = await getDocs(teamRef);

      const updates = snapshot.docs.map((docSnap) => {
         const docRef = doc(db, "teams", docSnap.id);

         return updateDoc(docRef, {
            isReady: false,
         });
      });
      await Promise.all(updates);
   };
   const questionRefs = collection(db, "questions");
   useEffect(() => {
      const unsub = onSnapshot(questionRefs, (snapshop) => {
         const result: QuestionStateType[] = snapshop.docs.map((doc) => ({
            id: doc.id,
            ...(doc.data() as QuestionStateType),
         }));

         result.map(({ questionState }) => {
            setQuestionState({ questionState: questionState });
         });
      });

      return () => unsub();
   }, []);
   return (
      <QuestionContext.Provider
         value={{
            previousAns,
            handleQuestionState,
            onLobby,
            onReady,
            currentQuestion,

            questionState,
         }}
      >
         {children}
      </QuestionContext.Provider>
   );
};

export default QuestionContextProvider;

export const useQuestion = () => {
   const context = useContext(QuestionContext);
   if (!context) {
      throw new Error("Error bleh");
   }
   return context;
};
