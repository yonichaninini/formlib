import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import Validation from "../utill/Validation";
import formStateContext from "../../contexts/formStateContext";

const Form = ({ children, onSubmit, initialData }) => {
  const [fields, setFields] = useState([]);
  console.log(fields);
  let isValid = false;
  const onHandleSubmit = e => {
    e.preventDefault();
    let data = parseData();
    let valid = tryValidation();
    if (valid) {
      onSubmit(data);
    } else {
      e.preventDefault();
    }
  };
  function parseData() {
    const data = {};
    fields.forEach(({ name, ref, path }) => {
      const value = ref[path];
      data[name] = value;
    });
    return data;
  }
  function tryValidation() {
    const validationList = [];
    fields.forEach(({ ref, path, validationType, myValidationType }) => {
      const value = ref[path];
      validationList.push(
        Validation.validate(validationType, value, isValid, myValidationType)
      );
    });
    const validationFun = validationList => {
      return validationList === true;
    };
    return validationList.every(validationFun);
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
