const Validation = {
  isEmail: email => {
    let validationEmail = /^[\d\w]([-_.]?[\d\w])*@[\d\w]([-_.]?[\d\w])*\.[\w]{2,3}$/; //이메일
    return validationEmail.test(email);
  },
  isPhoneNumber: phoneNumber => {
    let validationPhone = /^\d{3}-\d{3,4}-\d{4}$/; //휴대폰번호
    return validationPhone.test(phoneNumber);
  },
  isResidentNumber: residentNumber => {
    let validationResidentNumber = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-4][0-9]{6}$/g; //주민등록번호
    return validationResidentNumber.test(residentNumber);
  },
  isUrl: url => {
    let validationUrl = /^(file|gopher|news|nntp|telnet|https?|ftps?|sftp):\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/; //url
    return validationUrl.test(url);
  },
  isPassword: passoword => {
    let validationPassword = /^(?=[A-Z]+)(?=[a-z]+)(?=[\d]+)(?=[#?!@$%^&*-_]+).{8,}$/;
    //비밀번호는 영문으로 작성하며, 소문자,대문자,특수문자,숫자를 모두 포함시켜야합니다
    return validationPassword.test(passoword);
  },
  validate: (validationType, value, myValidationType) => {
    let isValid = false;
    if (validationType === "email") {
      isValid = Validation.isEmail(value);
    } else if (validationType === "phoneNumber") {
      isValid = Validation.isPhoneNumber(value);
    } else if (validationType === "residentNumber") {
      isValid = Validation.isResidentNumber(value);
    } else if (validationType === "url") {
      isValid = Validation.isUrl(value);
    } else if (validationType === "password") {
      isValid = Validation.isUrl(value);
    } else {
      isValid = myValidationType ? myValidationType.test(value) : true;
    }
    return isValid;
  }
};
export default Validation;
