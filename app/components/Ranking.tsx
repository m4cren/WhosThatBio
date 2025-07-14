import { TeamWithId, TeamWithResult } from "@/app/lib/types";
import { sort } from "fast-sort";

const Ranking = ({ teams }: { teams: TeamWithId[] | TeamWithResult[] }) => {
   const sortedTeamsFromHighest = sort([...teams]).desc(
      (team) => team.answered_question,
   );
   return (
      <div className="flex flex-col w-full gap-8 items-center">
         <h2 className="text-4xl font-bold">Ranking</h2>
         <ul className="flex flex-col w-full gap-4">
            {sortedTeamsFromHighest.map(
               ({
                  answered_question,

                  team_name,
                  id,
               }) => (
                  <li
                     key={id}
                     className="flex flex-col gap-2 items-center border-1 border-black/30 rounded-md px-18 py-[4vw] lg:py-[3vw] [&:nth-child(1)]:bg-gradient-to-r [&:nth-child(1)]:from-yellow-400 [&:nth-child(1)]:via-yellow-300 [&:nth-child(1)]:to-yellow-500 [&:nth-child(2)]:bg-gradient-to-r [&:nth-child(2)]:from-gray-300 [&:nth-child(2)]:via-gray-200 [&:nth-child(2)]:to-gray-400
 [&:nth-child(3)]:bg-gradient-to-r [&:nth-child(3)]:from-orange-700 [&:nth-child(3)]:via-amber-600 [&:nth-child(3)]:to-yellow-600
"
                  >
                     <h4 className="text-[#2c2c2c] font-black text-xl">
                        {team_name}
                     </h4>
                     <p>Score: {answered_question}</p>
                  </li>
               ),
            )}
         </ul>
      </div>
   );
};

export default Ranking;
