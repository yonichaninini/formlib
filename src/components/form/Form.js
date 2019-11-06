import React, { useState, useContext } from "react";
import formStateContext from "../../contexts/formStateContext";
const Form = ({ children, onSubmit, initialData }) => {
  const [fields, setFields] = useState([]);
  const onHandleSubmit = e => {
    e.preventDefault();
    let data = parseData();
    console.log(data);
  };

  function parseData() {
    const data = {};

    fields.forEach(({ name, ref, path }) => {
      const value = ref[path]; //sdd
      data[name] = value;
    });
    return data;
  }
  const registerField = field => {
    //{ name: fieldName, ref: ref.current, path: 'value' }
    //setFields(field);//------------->
  };

  const value = useContext(formStateContext);

  console.log(value);
  return (
    <formStateContext.Provider value={{ registerField, initialData }}>
      <form onSubmit={onHandleSubmit}>{children}</form>
    </formStateContext.Provider>
  );
};

export default Form;
