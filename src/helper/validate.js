import React  from 'react';

export const validateForm = (values) => {
  let errors = {};

  if(!values.email) {
    errors.email = 'Поле почта обязательно';
  } else if (!/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(values.email)) {
    errors.email = 'Ведите валидный адрес почты';
  }

  if(!values.password) {
    errors.password = 'Поле пароль обязательно';
  }

  if(!values.name) {
    errors.name = 'Поле имя обязательно'
  } else if (!/^[a-zA-Z\s-]+$/.test(values.name)) {
    errors.name = 'Имя может содержать только латиницу, пробел или дефис';
  } else if (values.name.length<2) {
    errors.name = 'Имя должно содержать 2 и более символа';
  }

  return errors;
}
