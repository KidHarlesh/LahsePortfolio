import { createContext, useContext } from "react";


export const HireMeContext = createContext();


export const useHireMe = () => useContext(HireMeContext);
