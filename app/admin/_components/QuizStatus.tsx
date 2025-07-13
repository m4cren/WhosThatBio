"use client";
import { useQuestion } from "@/app/context/QuestionContextProvider";
import { CheckCheck } from "lucide-react";
import ActionBtn from "./ActionBtn";

const QuizStatus = ({
   team_count,
   team_ready,
}: {
   team_count: number;
   team_ready: number;
}) => {
   const { handleQuestionState, questionState, onLobby, currentQuestion } =
      useQuestion();
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
                  {questionState?.questionState === "Result"
                     ? "Ready to proceed to next question"
                     : `Team ready ${team_ready}/${team_count}`}
               </p>
            </div>
         </div>
         <div>
            {currentQuestion !== "q12" ? (
               <ActionBtn
                  action={() => handleQuestionState("Final")}
                  children="End Quiz"
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
               />
            ) : team_count !== 0 ? (
               <ActionBtn
                  action={() => onLobby()}
                  children={
                     questionState?.questionState === "Question"
                        ? "In-Progress"
                        : "Go To Lobby"
                  }
                  questionState={questionState}
               />
            ) : (
               <ActionBtn
                  action={() => onLobby()}
                  children="Waiting for others"
                  questionState={questionState}
               />
            )}
         </div>
      </div>
   );
};

export default QuizStatus;
