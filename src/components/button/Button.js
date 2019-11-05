import React from "react";

const Button = ({ innerText }) => {
  const style = {
    button: {
      width: "100px",
      height: "25px",
      fontSize: "15px",
      background: "#E53A40",
      color: "white",
      border: "none"
    }
  };
  return (
    <>
      <button type="submit" style={style.button}>
        {innerText}
      </button>
    </>
  );
};

export default Button;
