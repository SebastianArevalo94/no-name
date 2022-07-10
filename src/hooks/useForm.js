import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const [samePassword, setSamePassword] = useState(null);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleSamePassword = (password, e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    e.target.value === password ? setSamePassword(true) : setSamePassword(false);
  };

  const handleSelect = ({ target }) => {
    let updatedValue = target.value;

    if (updatedValue === "true" || updatedValue === "false") {
      updatedValue = JSON.parse(updatedValue);
    }
    setValues({
      ...values,
      [target.name]: updatedValue,
    });
  };
  return [values, samePassword, handleInputChange, handleSamePassword, handleSelect, reset];
};