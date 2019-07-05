import React, { useEffect } from "react";
import { connect } from "react-redux";
import { usuariosTraerDatos } from "../../actions/usuariosActions";
import { publicacionesTraerPorUsuario } from "../../actions/publicacionesActions";
import Spinner from "../../components/general/Spinner";
import Fatal from "../../components/general/Fatal";

const Publications = ({
  match: {
    params: { key }
  },
  users,
  usuariosTraerDatos,
  publicacionesTraerPorUsuario,
  usuariosReducer,
  publicacionesReducer
}) => {
  useEffect(() => {
    const verficarUsuarios = async () => {
      if (!usuariosReducer.users.length) {
        await usuariosTraerDatos();
      }
    };
    verficarUsuarios();
  }, []);

  useEffect(() => {
    if (usuariosReducer.users.length) {
      if (!("publicationsKey" in usuariosReducer.users[key])) {
        publicacionesTraerPorUsuario(key);
      }
    }
  }, [usuariosReducer.users, key, usuariosReducer.error]);

  const locateUser = () => {
    if (usuariosReducer.loading || !usuariosReducer.users.length) {
      return <Spinner />;
    }
    if (usuariosReducer.error) {
      return <Fatal message={usuariosReducer.error} />;
      // console.log("Hay error");
    }
    const name = usuariosReducer.users[key].name;
    return <h1>Publicaciones de {name}</h1>;
  };
  console.log(usuariosReducer.users);
  console.log(publicacionesReducer.publications);
  return <div>{locateUser()}</div>;
};

const mapStateToProps = ({ usuariosReducer, publicacionesReducer }) => ({
  usuariosReducer,
  publicacionesReducer
});

const mapDispatchToProps = {
  usuariosTraerDatos,
  publicacionesTraerPorUsuario
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Publications);
