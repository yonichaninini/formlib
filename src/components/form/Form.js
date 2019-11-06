import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import formStateContext from "../../contexts/formStateContext";

const Form = ({ children, onSubmit, initialData }) => {
  const [fields, setFields] = useState([]);
  const onHandleSubmit = e => {
    e.preventDefault();
    let data = parseData();
    console.log(data);
    onSubmit(data);
  };

  function parseData() {
    const data = {};

    fields.forEach(({ name, ref, path }) => {
      const value = ref[path];
      data[name] = value;
    });
    return data;
  }
  const registerField = useCallback(field => {
    setFields(state => [...state, field]);
  }, []);
  return (
    <formStateContext.Provider value={{ registerField, initialData }}>
      <form onSubmit={onHandleSubmit}>{children}</form>
    </formStateContext.Provider>
  );
};
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node
};
Form.defaultProps = {};
export default Form;
