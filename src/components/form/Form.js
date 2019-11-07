import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import Validation from "../utill/Validation";
import formStateContext from "../../contexts/formStateContext";

const Form = ({ children, onSubmit, initialData }) => {
  const [fields, setFields] = useState([]);
  let isValid = false;
  const onHandleSubmit = e => {
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
      if (
        validationType === "email" ||
        validationType === "phoneNumber" ||
        validationType === "residentNumber" ||
        validationType === "url"
      ) {
        if (validationType === "email") {
          isValid = Validation.isEmail(value);
        } else if (validationType === "phoneNumber") {
          isValid = Validation.isPhoneNumber(value);
        } else if (validationType === "residentNumber") {
          isValid = Validation.isResidentNumber(value);
        } else if (validationType === "url") {
          isValid = Validation.isUrl(value);
        }
      } else if (validationType === undefined) {
        if (myValidationType !== undefined) {
          if (myValidationType.test(value)) {
            isValid = true;
          } else {
            isValid = false;
          }
        } else {
          isValid = true;
        }
      }
      validationList.push(isValid);
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
