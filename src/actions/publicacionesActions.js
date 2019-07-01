import { TRAER_POR_USUARIO, LOADING, ERROR } from "../types/publicacionesTypes";
import axios from "axios";
import * as usuariosTypes from "../types/usuariosTypes";

const { TRAER_TODOS: USUARIOS_TRAER_TODOS } = usuariosTypes;

export const publicacionesTraerPorUsuario = key => async (
  dispatch,
  getState
) => {
  const { users } = getState().usuariosReducer;
  const { publications } = getState().publicacionesReducer;
  const userID = users[key].id;
  let updatedPublications;
  try {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${userID}`
    );
    updatedPublications = [...publications, data];
    const publicationsKey = updatedPublications.length - 1;
    const updatedUsers = [...users];
    updatedUsers[key] = {
      ...users[key],
      publicationsKey
    };
    dispatch({
      type: USUARIOS_TRAER_TODOS,
      payload: updatedUsers
    });
    // console.log(publications);
    dispatch({
      type: TRAER_POR_USUARIO,
      payload: updatedPublications
    });
  } catch (error) {
    console.log("error", error.message);
    dispatch({
      type: ERROR,
      payload: error.message
    });
  }
};

// export const publicacionesTraerDatos = () => async dispatch => {
//   try {
//     const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
//     // console.log(data);
//     dispatch({
//       type: TRAER_TODOS,
//       payload: data
//     });
//   } catch (error) {
//     console.log("error", error.message);
//     dispatch({
//       type: ERROR,
//       payload: error.message
//     });
//   }
// };
