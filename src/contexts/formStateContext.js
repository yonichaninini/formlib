import { createContext } from "react";

export default createContext({
  initialData: {},
  errors: {},
  scopePath: "",
  isValid: false,
  registerField: () => {}
});
