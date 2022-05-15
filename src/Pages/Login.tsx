import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login } from '../Redux/features/user';
import { fetchData } from '../Api/index';

// Styles
import {
  formStyles,
  labelStyles,
  inputStyles,
  buttonStyles,
  errStyles,
} from '../Styles/index.styles';

const Login: FC = () => {
  const [inputField, setInputField] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setShowError(false);
    setInputField(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!inputField) {
      setShowError(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const data = await fetchData(inputField);
      if (data) {
        dispatch(login(data));
      } else {
        throw new Error('Problem Finding Student Name');
      }
    } catch {
      setIsSubmitting(false);
      setShowError(true);
      return;
    }
    setInputField('');
    setIsSubmitting(false);
    navigate('/profile');
  };

  return (
    <form className={formStyles} onSubmit={handleSubmit}>
      {showError
        && (
          <section className={errStyles}>
            Student Name not found.
          </section>
        )}
      <label
        htmlFor="student-name"
        className={labelStyles}
      >
        Student Name:
        <input
          className={inputStyles}
          name="student-name"
          type="text"
          id="student-name"
          value={inputField}
          onChange={handleChange}
        />
      </label>
      <button
        className={buttonStyles}
        disabled={
          isSubmitting || !inputField
        }
        type="submit"
      >
        {isSubmitting && 'Loading...'}
        {!isSubmitting && 'Login'}
      </button>
    </form>
  );
};

export default Login;
