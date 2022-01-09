export function isFormValidated(formName) {
  let form = document.getElementById(formName);
  let isValid = form !== null ? form.checkValidity() : false;
  return isValid;
}
