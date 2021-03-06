import { TRAER_POR_USUARIO, LOADING, ERROR } from "../types/publicacionesTypes";

const INITIAL_STATE = {
  publications: [],
  loading: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_POR_USUARIO:
      return {
        ...state,
        publications: action.payload,
        loading: false,
        error: ""
      };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
