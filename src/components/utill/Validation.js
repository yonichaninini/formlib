const Validation = {
  isEmail: email => {
    let validationEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //이메일
    if (validationEmail.test(email)) {
      return true;
    } else {
      return false;
    }
  },
  isPhoneNumber: phoneNumber => {
    let validationPhone = /^\d{3}-\d{3,4}-\d{4}$/; //휴대폰번호
    if (validationPhone.test(phoneNumber)) {
      return true;
    } else {
      return;
    }
  },
  isResidentNumber: residentNumber => {
    let validationResidentNumber = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-4][0-9]{6}$/g; //주민등록번호
    if (validationResidentNumber.test(residentNumber)) {
      return true;
    } else {
      return false;
    }
  },
  isUrl: url => {
    let validationUrl = /^(file|gopher|news|nntp|telnet|https?|ftps?|sftp):\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/; //url
    if (validationUrl.test(url)) {
      return true;
    } else {
      return false;
    }
  }
};
export default Validation;
