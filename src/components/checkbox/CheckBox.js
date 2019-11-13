import React, { useRef, useEffect } from "react";
import useField from "../../useField";

const CheckBox = ({ name }) => {
  const ref = useRef(null);
  const { fieldName, registerField } = useField(name);
  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: "value"
      });
    }
    console.log(ref);
  }, [fieldName, ref, registerField]);
  return <input type="checkbox" />;
};

export default CheckBox;
