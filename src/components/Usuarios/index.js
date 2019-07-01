import React, { useState, useEffect } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { usuariosTraerDatos } from "../../actions/usuariosActions";
// import * as usuariosActions from "../../actions/usuariosActions";
// import { TRAER_TODOS, LOADING, ERROR } from "../../types/usuariosTypes";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";
import Table from "./Table";

const Usuarios = ({
  loading,
  users,
  error,
  usuariosTraerDatos,
  usuariosReducer,
  publicacionesReducer
}) => {
  // const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    !users.length && usuariosTraerDatos();
  }, []);
  console.log(loading);

  const contentToShow = () => {
    if (loading) {
      return <Spinner />;
    } else if (error) return <Fatal message={error} />;
    else return <Table />;
  };
  // console.log(usuariosReducer);
  // console.log(publicacionesReducer);
  return (
    <div>
      <h1>Users</h1>
      <div>{contentToShow()}</div>;
    </div>
  );
};

const mapDispatchToProps = {
  usuariosTraerDatos
};

const mapStateToProps = reducers => reducers.usuariosReducer;

// Devuelven un objeto

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Usuarios);

// const mapDispatchToProps = dispatch => ({
//   // Devuelven un objeto, se coloca parentesis porque devuelve un objeto
//   // Dispatch tiene como parametro a un objeto o ACTION
//   // Tambien se pueden usar funciones que devuelvan Objetos, ACTION CREATORS
//   traerTodos: () => {
//     dispatch(async dispatch => {
//       dispatch({
//         type: LOADING
//       });

//       try {
//         const { data } = await axios(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         console.log(data);
//         dispatch({
//           type: TRAER_TODOS,
//           payload: data
//         });
//       } catch (error) {
//         console.log("error", error.message);
//         dispatch({
//           type: ERROR,
//           payload: error.message
//         });
//       }
//     });
//   }
// });
