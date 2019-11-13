import React from "react";
import PropTypes from "prop-types";

const CheckBoxGroup = ({ children }) => {
  return <div>{children}</div>;
};
CheckBoxGroup.propTypes = {
  children: PropTypes.node
};
export default CheckBoxGroup;
