import React, { ReactNode, createContext, useMemo, useState } from "react";
import { GlobalContextData, UserData } from "../interfaces/interfaces";

export const GlobalContext = createContext<GlobalContextData>({
  userDetails: null,
  setUserDetails: function (): void {
    throw new Error("Function not implemented.");
  },
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [userDetails, setUserDetails] = useState<UserData | null>(null);

  const valueObj: GlobalContextData = useMemo(
    () => ({
      userDetails,
      setUserDetails,
    }),
    [userDetails]
  );
  return (
    <GlobalContext.Provider value={valueObj}>{children}</GlobalContext.Provider>
  );
};
