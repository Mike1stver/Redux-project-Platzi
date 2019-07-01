import React, { useEffect } from "react";
import { connect } from "react-redux";
import { usuariosTraerDatos } from "../../actions/usuariosActions";
import { publicacionesTraerPorUsuario } from "../../actions/publicacionesActions";
import Spinner from "../../components/general/Spinner";

const Publications = ({
  match,
  users,
  usuariosTraerDatos,
  publicacionesTraerPorUsuario,
  usuariosReducer,
  publicacionesReducer
}) => {
  useEffect(() => {
    const verficarUsuarios = async () => {
      console.log("aparece antes que el primero");
      console.log(usuariosReducer);
      console.log(usuariosReducer.users);

      if (!usuariosReducer.users.length) {
        await usuariosTraerDatos();
        console.log("aparece primero");
        // console.log("declarado primero");
        // console.log(usuariosReducer);
        // console.log(usuariosReducer.users);
        console.log(match.params.key);
        console.log(usuariosReducer);
        console.log(usuariosReducer.users);
        // console.log(users);
      }
      console.log("aparece segundo");
      console.log(match.params.key);
      console.log(usuariosReducer);
      console.log(usuariosReducer.users);

      // !("publicationsKey" in usuariosReducer.users[match.params.key]) &&
      //   publicacionesTraerPorUsuario(match.params.key);
    };
    verficarUsuarios();
    console.log("aparece tercero");
    // console.log("declarado tercero");
  }, []);

  // useEffect(() => {
  //   !("publicationsKey" in usuariosReducer.users[match.params.key]) &&
  //     publicacionesTraerPorUsuario(match.params.key);
  // }, [usuariosReducer]);

  // console.log(usuariosReducer);
  // console.log(publicacionesReducer);

  console.log("aparece al final");
  console.log(usuariosReducer);
  console.log(usuariosReducer.users);

  const locateUser = () => {
    if (usuariosReducer.loading) {
      return <Spinner />;
    }
  };

  return (
    <div>
      <h1>Publicaciones de </h1>
      {locateUser()}
    </div>
  );
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
