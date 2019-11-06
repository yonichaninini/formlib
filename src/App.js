import React from "react";
import "./App.css";
import TextField from "./components/input/TextField";
import Form from "./components/form/Form";
import Button from "./components/button/Button";
import CheckBox from "./components/checkbox/CheckBox";
import Label from "./components/label/Label";

function App() {
  const myValidation = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const onSubmit = data => {
    console.log(data);
  };
  return (
    <div className="App">
      <Form onSubmit={onSubmit}>
        <div>
          <Label htmlFor="email">이메일</Label>
          <TextField
            placeholder="이메일을 입력하세요.."
            name="email"
            type="email"
            validation="email"
            required={true}
            notValidMsg="유효하지 않은 이메일 양식입니다"
          />
        </div>
        <div>
          <Label>비밀번호</Label>
          <TextField
            placeholder="비밀번호를 입력하세요.."
            name="password"
            type="password"
            myValidation={myValidation}
            required={true}
            notValidMsg="비밀번호는 영문으로 작성하며, 소문자,대문자,특수문자,숫자를 모두 포함시켜야합니다"
          />
        </div>
        <div>
          <Label>하고 싶은말</Label>
          <TextField
            placeholder="하고싶은말 아무거나 하세요"
            name="say"
            type="text"
          />
        </div>
        <div>
          <Label>첫번째약관에 동의하시겠습니까?</Label>
          <CheckBox />
        </div>
        <div>
          <Label>이메일 수집을 동의하시겠습니까?</Label>
          <CheckBox />
        </div>
        <div>
          <Button innerText="로그인" />
        </div>
      </Form>
    </div>
  );
}

export default App;
