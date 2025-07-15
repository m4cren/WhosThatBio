import { Scroll } from "lucide-react";
import { TeamWithResult } from "../lib/types";
import TeamCard from "./TeamCard";
import TeamCardResult from "./TeamCardResult";

const QuestionSummary = ({ teams }: { teams: TeamWithResult[] }) => {
   return (
      <div className="flex flex-col gap-[2vw]">
         <h1 className="text-[#2c2c2c]  text-2xl lg:text-3xl font-bold flex items-center gap-4">
            <Scroll color="#14A84D" size={30} />
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
