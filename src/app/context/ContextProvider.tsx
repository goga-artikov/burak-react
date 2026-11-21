import React, { ReactNode, useState } from "react";
import Cookies from "universal-cookie";
import { Member } from "../../lib/types/member";
import { GlobalContext } from "../components/hooks/useGlobals";

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authMember, setAuthMember] = useState<Member | null>(() => {
    const cookies = new Cookies();
    if (!cookies.get("accessToken")) {
      localStorage.removeItem("memberData");
      return null;
    }

    try {
      const memberData = localStorage.getItem("memberData");
      return memberData ? (JSON.parse(memberData) as Member) : null;
    } catch {
      localStorage.removeItem("memberData");
      return null;
    }
  });

  return (
    <GlobalContext.Provider value={{ authMember, setAuthMember }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
