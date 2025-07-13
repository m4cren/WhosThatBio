"use client";
import { useEffect, useState } from "react";
import EnterTeam from "./components/EnterTeam";
import Lobby from "./components/Lobby";
import Question from "./components/Question";
import Results from "./components/Results";
import TeamDetails from "./components/TeamDetails";
import { useQuestion } from "./context/QuestionContextProvider";
import { PhaseType } from "./lib/types";

export default function Home() {
   const [phase, setPhase] = useState<PhaseType>("TeamName");
   const { questionState } = useQuestion();

   useEffect(() => {
      if (!localStorage.getItem("token")) return;
      if (!questionState) return;
      switch (questionState.questionState) {
         case "Question":
            localStorage.setItem("phase", "Question");
            setPhase("Question");
            break;
         case "Result":
            localStorage.setItem("phase", "Result");
            setPhase("Result");
            break;
         case "Final":
            localStorage.setItem("phase", "Final");
            setPhase("Final");
            break;
         case null:
            localStorage.setItem("phase", "Lobby");
            setPhase("Lobby");
            break;
      }
   }, [questionState]);

   const switchPhase = (switchTo: PhaseType) => {
      localStorage.setItem("phase", switchTo);
      setPhase(switchTo);
   };

   useEffect(() => {
      const lastState = localStorage.getItem("phase") as PhaseType;
      if (lastState) setPhase(lastState);
   }, []);

   const currentPhase = () => {
      switch (phase) {
         case "TeamName":
            return <EnterTeam switchPhase={switchPhase} />;

         case "TeamDetails":
            return <TeamDetails switchPhase={switchPhase} />;
         case "Lobby":
            return <Lobby />;
         case "Question":
            return <Question />;
         case "Result":
            return <Results />;
      }
   };

   return <main>{currentPhase()}</main>;
}
