import React from "react";
import Validation from "../utill/Validation";
import PropTypes from "prop-types";
const TextField = ({
  placeholder,
  type,
  value,
  onChange,
  validation,
  myValidation,
  notValidMsg,
  name
  //style
}) => {
  console.log(myValidation);
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
  if (
    validation === "email" ||
    validation === "phoneNumber" ||
    validation === "residentNumber" ||
    validation === "url"
  ) {
    if (validation === "email") {
      isValid = Validation.isEmail(value);
    } else if (validation === "phoneNumber") {
      isValid = Validation.isPhoneNumber(value);
    } else if (validation === "residentNumber") {
      isValid = Validation.isResidentNumber(value);
    } else if (validation === "url") {
      isValid = Validation.isUrl(value);
    }
  } else if (validation === undefined) {
    if (myValidation !== undefined) {
      if (myValidation.test(value)) {
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
        onChange={onChange}
        value={value}
        name={name}
      />
      <span className="notValidMsg" style={style.notValidMsg}>
        {isValid ? "" : notValidMsg}
      </span>
    </>
  );
};
TextField.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  myValidation: PropTypes.instanceOf(RegExp),
  validation: PropTypes.oneOf(["email", "phoneNumber", "residentNumber", "url"])
};
TextField.defaultProps = {
  validation: undefined,
  notValidMsg: ""
};

export default TextField;
