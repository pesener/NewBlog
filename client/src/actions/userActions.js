import { AUTH, SIGNUP_FAIL } from "../constants/actionConstants";

import * as api from "../axios";

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);

    dispatch({ type: AUTH, payload: data });
    history.push("/");
  } catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
