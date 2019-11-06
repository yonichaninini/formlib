import { useContext } from "react";

import formStateContext from "./contexts/formStateContext";

export default function useField(name) {
  const { initialData, scopePath, registerField } = useContext(
    formStateContext
  );

  const fieldName = scopePath ? `${scopePath}.${name}` : name;

  return {
    fieldName,
    registerField,
    initialData
  };
}
