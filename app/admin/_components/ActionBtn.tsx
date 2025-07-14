import { QuestionStateType } from "@/app/lib/types";
import { ReactNode } from "react";

interface Props {
   action: () => void;
   children: ReactNode;
   team_ready: number;
   team_count: number;
   questionState?: QuestionStateType | null;
   current_question: string;
}
const ActionBtn = ({
   action,
   children,
   team_count,
   team_ready,
   questionState,
   current_question,
}: Props) => {
   return (
      <button
         onClick={action}
         disabled={
            current_question === "q13"
               ? false
               : questionState
                 ? questionState.questionState === "Question"
                 : team_count !== team_ready || team_count === 0
         }
         className="flex flex-row items-center cursor-pointer bg-gradient-to-r from-[#1FBE5A] to-[#14A84D] text-[#f5f5f5] font-bold px-[2vw] rounded-lg text-[1vw] py-[1vw] disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-200 disabled:opacity-70"
      >
         <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
         >
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 110 5H9V10z"
            />
         </svg>
         {children}
      </button>
   );
};

export default ActionBtn;
