import React, { useState, useEffect } from "react";
import axios from "axios";
const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsuarios(data);
    }
    fetchData();
    console.log("primero se mostrara este texto");
  }, []);

  return (
    <div className="margen">
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(item => (
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

export default Usuarios;
