import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import Validation from "../utill/Validation";
import useField from "../../useField";

const TextField = ({
  placeholder,
  type,
  validation,
  myValidation,
  notValidMsg,
  name,
  required,
  initialValue
  //style
}) => {
  const ref = useRef(null);
  const { fieldName, registerField } = useField(name);
  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: "value",
        validationType: validation,
        myValidationType: myValidation
      });
    }
  }, [fieldName, myValidation, ref, registerField, validation]);
  const style = {
    textInput: {
      width: "200px",
      height: "25px",
      fontSize: "15px"
    },
    inputLabel: {
      fontSize: "15px"
    },
    notValidMsg: {
      color: "red",
      fontSize: "10px"
    }
  };
  const [value, setValue] = useState();
  const onchange = e => {
    setValue(e.target.value);
  };
  let isValid = false;
  isValid = Validation.validate(validation, value, isValid, myValidation);
  return (
    <>
      <input
        style={style.textInput}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onchange}
        required={required}
        ref={ref}
        value={initialValue ? initialValue : value}
      />
      <span className="notValidMsg" style={style.notValidMsg}>
        {isValid ? "" : notValidMsg}
      </span>
    </>
  );
};
TextField.propTypes = {
  placeholder: PropTypes.string,
  myValidation: PropTypes.instanceOf(RegExp),
  name: PropTypes.string.isRequired,
  validation: PropTypes.oneOf([
    "email",
    "phoneNumber",
    "residentNumber",
    "url"
  ]),
  type: PropTypes.oneOf(["text", "password", "email", "search", "url"])
};
TextField.defaultProps = {
  validation: undefined,
  notValidMsg: "",
  type: "text",
  required: false
};

export default TextField;
