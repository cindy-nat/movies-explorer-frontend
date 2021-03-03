import React, { useCallback } from 'react';
import { validateForm } from '../helper/validate';

export const useFormWithValidation = () => {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);

  React.useEffect (()=> {
    setErrors(validateForm(values));
  }, [values]);

  const onBlur = () => {
    setIsClicked(true);
  }

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newErrors = {}, newIsValid = false) => {
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, onBlur, isClicked };
}
