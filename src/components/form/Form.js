import React, { useContext } from "react";
import formStateContext from "../../contexts/formStateContext";
const Form = ({ children, onSubmit }) => {
  const value = useContext(formStateContext);
  console.log(value);
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;
