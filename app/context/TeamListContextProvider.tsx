"use client";
import { collection, onSnapshot } from "firebase/firestore";
import {
   createContext,
   PropsWithChildren,
   useContext,
   useEffect,
   useState,
} from "react";
import { db } from "../lib/firebase/client";
import { TeamWithResult } from "../lib/types";

interface Props {
   teams: TeamWithResult[];
   team_count: number;
   team_ready: number;
}

const TeamListContext = createContext<Props | null>(null);

const TeamListContextProvider = ({ children }: PropsWithChildren) => {
   const [teams, setTeams] = useState<TeamWithResult[]>([]);

   const teamRef = collection(db, "teams");

   useEffect(() => {
      const unsub = onSnapshot(teamRef, (snapshop) => {
         const result: TeamWithResult[] = snapshop.docs.map((doc) => ({
            id: doc.id,
            ...(doc.data() as TeamWithResult),
         }));

         setTeams(result);
      });

      return () => unsub();
   }, []);

   const team_count = teams.length;
   const team_ready = teams.filter(({ isReady }) => isReady === true).length;

   return (
      <TeamListContext.Provider
         value={{
            team_count,
            team_ready,
            teams,
         }}
      >
         {children}
      </TeamListContext.Provider>
   );
};

export default TeamListContextProvider;

export const useTeamList = () => {
   const context = useContext(TeamListContext);
   if (!context) {
      throw new Error("Error bleh");
   }
   return context;
};
