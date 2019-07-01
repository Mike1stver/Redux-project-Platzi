import { TRAER_TODOS, LOADING, ERROR } from "../types/usuariosTypes";
import axios from "axios";

export const usuariosTraerDatos = () => async dispatch => {
  dispatch({
    type: LOADING
  });

  try {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    // console.log(data);
    dispatch({
      type: TRAER_TODOS,
      payload: data
    });
  } catch (error) {
    console.log("error", error.message);
    dispatch({
      type: ERROR,
      payload: error.message
    });
  }
};
