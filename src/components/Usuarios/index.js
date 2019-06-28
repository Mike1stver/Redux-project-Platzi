import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";
import { TRAER_TODOS } from "../../types/usuariosTypes";

const Usuarios = props => {
  // const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // async function fetchData() {
    // const { data } = await axios(
    //   "https://jsonplaceholder.typicode.com/users"
    // );
    // setUsuarios(data);
    props.traerTodos();
    // }
    // fetchData();
    // console.log("primero se mostrara este texto");
  }, []);
  console.log(props);

  return (
    <div>
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {props.usuarios.map(item => (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = reducers => {
  // Devuelven un objeto
  return reducers.usuariosReducer;
};

const mapDispatchToProps = dispatch => ({
  // Devuelven un objeto, se coloca parentesis porque devuelve un objeto
  // Dispatch tiene como parametro a un objeto o ACTION
  // Tambien se pueden usar funciones que devuelvan Objetos, ACTION CREATORS
  traerTodos: () => {
    // dispatch({
    //   type: "traer_usuarios",
    //   payload: [1, 2, 3]
    // })
    // setUsuarios(data);
    // props.traerTodos();
    dispatch(async dispatch => {
      try {
        const { data } = await axios(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(data);
        dispatch({
          type: TRAER_TODOS,
          payload: data
        });
      } catch (error) {
        console.log("error", error.message);
      }
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Usuarios);
