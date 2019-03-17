import { AUTH_USER, AUTH_ERROR } from './types';
import axios from 'axios';

export const signup = (formProps, callback) => async (dispatch) => {
  // axios.post('http://localhost:3090/signup', formProps); // best condition with live api

  console.log(formProps);
  const response = await 'this is token';
  const hasError = false;

  if (hasError) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'error message'
    });
  }

  localStorage.getItem('token');

  dispatch({
    type: AUTH_USER,
    payload: response
  });
  localStorage.setItem('token', response);
  callback();
};

export const signout = () => {
  localStorage.removeItem('token');
  
  return {
    type: AUTH_USER,
    payload: ''
  }
};

export const signin = signup();
