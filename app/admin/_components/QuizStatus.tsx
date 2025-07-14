"use client";
import { useQuestion } from "@/app/context/QuestionContextProvider";
import { CheckCheck } from "lucide-react";
import ActionBtn from "./ActionBtn";
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebase/client";

const QuizStatus = ({
   team_count,
   team_ready,
}: {
   team_count: number;
   team_ready: number;
}) => {
   const {
      handleQuestionState,
      questionState,
      onLobby,
      currentQuestion,
      room_id,
   } = useQuestion();

   if (questionState?.questionState === "Final") {
      return (
         <div className="flex items-center gap-8 justify-center">
            <h1 className="text-2xl font-bold text-center">Quiz Finished</h1>
            <button
               onClick={async () => {
                  const questionRef = doc(db, "questions", room_id);

                  await updateDoc(questionRef, {
                     number: 1,
                     questionState: null,
                  });
               }}
               className="cursor-pointer bg-gradient-to-r from-[#1FBE5A] to-[#14A84D] text-[#f5f5f5] font-bold px-[2vw] rounded-lg text-[1vw] py-[1vw] disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-200 disabled:opacity-70"
            >
               Reset
            </button>
         </div>
      );
   }

   return (
      <div className="flex items-center justify-between ">
         <div className="flex items-center gap-8">
            {team_ready === team_count ? (
               <CheckCheck color="#1FBE5A" />
            ) : (
               <span className="loading loading-dots text-[#2c2c2c] opacity-50" />
            )}
            <div>
               <h4 className="text-[#2c2c2c] font-bold text-[1.2vw]">
                  Quiz Status
               </h4>
               <p className="opacity-60 text-[#2c2c2c]">
                  {team_count <= 0
                     ? "There are no teams registered"
                     : questionState?.questionState === null
                       ? `Team ready ${team_ready}/${team_count}`
                       : questionState?.questionState === "Result" &&
                         "Ready to proceed to next question"}
               </p>
            </div>
         </div>
         <div>
            {currentQuestion === "q13" &&
            questionState?.questionState === null ? (
               <ActionBtn
                  action={() => handleQuestionState("Final")}
                  children="End Quiz"
                  team_count={team_count}
                  team_ready={team_ready}
                  current_question={currentQuestion}
               />
            ) : questionState?.questionState === null ? (
               <ActionBtn
                  action={() => handleQuestionState("Question")}
                  children={
                     team_ready === team_count
                        ? "Start Quiz"
                        : "Waiting For others"
                  }
                  team_count={team_count}
                  team_ready={team_ready}
                  current_question={currentQuestion}
               />
            ) : (
               <ActionBtn
                  action={() => onLobby()}
                  children={
                     questionState?.questionState === "Question"
                        ? "In-Progress"
                        : "Go To Lobby"
                  }
                  questionState={questionState}
                  team_count={team_count}
                  team_ready={team_ready}
                  current_question={currentQuestion}
               />
            )}
         </div>
      </div>
   );
};

export default QuizStatus;
