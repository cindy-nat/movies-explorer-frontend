import React from 'react';
import './Login.css';
import Form from "../Form/Form";
import { useFormWithValidation } from '../../Hooks/useFormWithValidation';


function Login({handleLogin, isLoginError}) {
  const formWithValidation = useFormWithValidation();
  const {email, password} = formWithValidation.values;

  const submitHandle = (event) => {
    event.preventDefault();
    handleLogin(email, password);
    formWithValidation.resetForm();
  }


  return (
    <>
    <Form formName = 'login'
          submitButton = 'Войти'
          formText = 'Ещё не зарегистрированы?'
          link = 'signup'
          linkText = 'Регистрация'
          formData = {formWithValidation}
          onSubmit = {submitHandle}
          isLoginError={isLoginError}>
    </Form>
    </>
  );
}

export default Login;
