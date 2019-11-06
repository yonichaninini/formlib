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
  required
  //style
}) => {
  const ref = useRef(null);
  const { fieldName, registerField } = useField(name);
  useEffect(() => {
    if (ref.current) {
      registerField({ name: fieldName, ref: ref.current, path: "value" });
      console.log(ref.current);
    }
  }, [fieldName, registerField]);

  let isValid = false;
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
  const [inputValue, setInputValue] = useState(null);
  const onchange = e => {
    setInputValue(e.target.value);
  };
  if (
    validation === "email" ||
    validation === "phoneNumber" ||
    validation === "residentNumber" ||
    validation === "url"
  ) {
    if (validation === "email") {
      isValid = Validation.isEmail(inputValue);
    } else if (validation === "phoneNumber") {
      isValid = Validation.isPhoneNumber(inputValue);
    } else if (validation === "residentNumber") {
      isValid = Validation.isResidentNumber(inputValue);
    } else if (validation === "url") {
      isValid = Validation.isUrl(inputValue);
    }
  } else if (validation === undefined) {
    if (myValidation !== undefined) {
      if (myValidation.test(inputValue)) {
        isValid = true;
      } else {
        isValid = false;
      }
    } else {
      isValid = true;
    }
  }
  console.log(isValid);
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
  validation: PropTypes.oneOf([
    "email",
    "phoneNumber",
    "residentNumber",
    "url"
  ]),
  type: PropTypes.oneOf(["text", "password", "email", "search", "url"])
  //required: Boolean
};
TextField.defaultProps = {
  validation: undefined,
  notValidMsg: "",
  type: "text",
  required: false
};

export default TextField;
