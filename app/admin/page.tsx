"use client";
import { useTeamList } from "../context/TeamListContextProvider";
import Heading from "../components/Heading";
import QuizStatus from "./_components/QuizStatus";
import TeamLists from "../components/TeamLists";
import QuestionSummary from "../components/QuestionSummary";
import { useQuestion } from "../context/QuestionContextProvider";
import Ranking from "../components/Ranking";

const page = () => {
   const { team_count, team_ready, teams } = useTeamList();
   const { questionState } = useQuestion();

   return (
      <main className="py-[4vw] flex flex-col gap-[5vw] px-[8vw] h-screen">
         <Heading />
         <QuizStatus team_count={team_count} team_ready={team_ready} />
         {questionState?.questionState === "Result" ? (
            <QuestionSummary teams={teams} />
         ) : questionState?.questionState === "Final" ? (
            <Ranking teams={teams} />
         ) : (
            <TeamLists teams={teams} />
         )}
      </main>
   );
};

export default page;
