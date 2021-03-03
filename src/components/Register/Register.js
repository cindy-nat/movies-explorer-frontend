import React from 'react';
import './Register.css';
import Header from "../Header/Header";
import Form from "../Form/Form";
import { useFormWithValidation } from '../../Hooks/useFormWithValidation';

function Register({ handleRegister, isRegisteredError }) {
  const formWithValidation = useFormWithValidation();
  const {email, password, name} = formWithValidation.values;

  const submitHandle = (event) => {
    event.preventDefault();
    handleRegister(email, password, name);
    formWithValidation.resetForm();
  }

  return (
    <>
      <Header headerText='Добро пожаловать!'/>
      <Form formName = 'register'
            submitButton = 'Зарегистрироваться'
            formText = 'Уже зарегистрированы?'
            link = 'signin'
            linkText = 'Войти'
            formData = {formWithValidation}
            onSubmit = {submitHandle}
            isRegisteredError = {isRegisteredError}
      >
      </Form>
    </>
  );
}

export default Register;
