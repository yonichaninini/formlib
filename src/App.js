import React, { useState } from "react";
import "./App.css";
import Parents from "./component/Parents";

function App() {
  const [formData, setFormData] = useState({ id: "cksal5911@naver.com" });
  const onSubmit = data => {
    setFormData(data);
  };
  console.log(formData);
  return <Parents initialData={formData} onSubmit={onSubmit} />;
}

export default App;
