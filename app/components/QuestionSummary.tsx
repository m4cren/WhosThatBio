import { TeamWithResult } from "../lib/types";
import TeamCard from "./TeamCard";
import TeamCardResult from "./TeamCardResult";

const QuestionSummary = ({ teams }: { teams: TeamWithResult[] }) => {
   return (
      <div className="flex flex-col gap-[2vw]">
         <h1 className="text-[#2c2c2c]  text-2xl lg:text-3xl font-bold flex items-center gap-4">
            <svg
               className="w-8 h-8 lg:w-10 lg:h-10 text-[#14A84D]"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
               />
            </svg>
            Results
         </h1>
         <ul className="grid grid-cols-1 lg:grid-cols-3 gap-[1vw]">
            {teams.map(
               ({
                  answered_question,
                  id,
                  isReady,
                  leader_name,
                  member_count,
                  correct,
                  team_name,
               }) => (
                  <TeamCardResult
                     correct={correct}
                     key={id}
                     answered_question={answered_question}
                     isReady={isReady}
                     leader_name={leader_name}
                     member_count={member_count}
                     team_name={team_name}
                     id={id}
                  />
               ),
            )}
         </ul>
      </div>
   );
};

export default QuestionSummary;
