import types from './sessionActionTypes';

export const signInRequest = () => ({
  type: types.SIGN_IN_REQUEST,
});

export const signInSuccess = data => ({
  type: types.SIGN_IN_SUCCESS,
  payload: data,
});

export const signInError = error => ({
  type: types.SIGN_IN_ERROR,
  payload: { error },
});

export const signUpRequest = () => ({
  type: types.SIGN_UP_REQUEST,
});

export const signUpSuccess = data => ({
  type: types.SIGN_UP_SUCCESS,
  payload: data,
});

export const signUpError = error => ({
  type: types.SIGN_UP_ERROR,
  payload: {
    error,
  },
});

export const signOutRequest = () => ({
  type: types.SIGN_OUT_REQUEST,
});

export const signOutSuccess = () => ({
  type: types.SIGN_OUT_SUCCESS,
});

export const refreshUserStart = () => ({
  type: types.REFRESH_CURRENT_USER_START,
});

export const refreshUserSuccess = user => ({
  type: types.REFRESH_CURRENT_USER_SUCCESS,
  payload: {
    user,
  },
});
