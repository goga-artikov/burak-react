import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { Member } from "../../../lib/types/member";

export interface GlobalInterface {
  authMember: Member | null;
  setAuthMember: Dispatch<SetStateAction<Member | null>>;
  orderBuilder: Date;
  setOrderBuilder: (input: Date) => void;
}

export const GlobalContext = createContext<GlobalInterface | undefined>(
  undefined,
);

export const useGlobals = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobals must be used within ContextProvider");
  }
  return context;
};
