import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Table = ({ users }) => {
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
          {users.map((item, key) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.website}</td>
              <Link to={`/publications/${key}`}>
                <div className="eye-solid icon" />
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = reducers => {
  return reducers.usuariosReducer;
};

export default connect(
  mapStateToProps,
  null
)(Table);
