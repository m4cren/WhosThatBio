import { number } from "framer-motion";

export type PhaseType =
   | "TeamName"
   | "TeamDetails"
   | "Lobby"
   | "Question"
   | "Result"
   | "Final";

export type TeamTypes = {
   id?: string;
   answered_question: number;
   isReady: boolean;
   leader_name: string;
   member_count: number;
   team_name: string;
};
export type TeamWithId = TeamTypes & {
   id: string;
};

export type QuestionStateType = {
   questionState: "Question" | "Result" | "Final" | null;
};

export type TeamWithResult = TeamTypes & {
   correct: boolean;
};
