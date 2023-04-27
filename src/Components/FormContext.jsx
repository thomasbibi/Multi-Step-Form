import { createContext, useContext, useState } from "react";

const FormContext = createContext({});

export function FormProvider({ children }) {
  const value = useState({});
  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  return context;
}
