import React from "react";
import "./Usuarios.scss";

export const Usuarios = () => {
  const usuarios = [
    {
      id: 1,
      tipo: "Administrador",
      nombre: "John Doe",
      estado: "Avtivo",
      correo: "johndoe@example.com",
      telefono: "123456789",
      departamento: "Departamento 1",
      municipio: "Municipio 1",
    },
    {
      id: 1,
      tipo: "Administrador",
      nombre: "John Doe",
      estado: "Avtivo",
      correo: "johndoe@example.com",
      telefono: "123456789",
      departamento: "Departamento 1",
      municipio: "Municipio 1",
    },
    {
      id: 1,
      tipo: "Administrador",
      nombre: "John Doe",
      estado: "Avtivo",
      correo: "johndoe@example.com",
      telefono: "123456789",
      departamento: "Departamento 1",
      municipio: "Municipio 1",
    },
    // Agrega más usuarios aquí
  ];

  const handleDelete = (id) => {
    // Lógica para eliminar el usuario con el ID proporcionado
    // Puedes enviar una solicitud HTTP DELETE a la URI http://127.0.0.1:5000/api/v1/usuarios/<id>
    console.log(`Eliminar usuario con ID: ${id}`);
  };

  return (
    <div className="usuarios__center">
      <div className="usuarios__center--left">
        <div className="usuarios__background">
          <h2 className="usuarios-heading">Usuarios</h2>
          <div className="search-container">
            <input type="text" placeholder="Buscar" className="buscar" />
            &nbsp;&nbsp;
            <button className="buscar-button">Buscar</button>
          </div>
          <br></br>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Tipo de usuario</th>
                <th>Nombre completo</th>
                <th>Estado</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th>Departamento</th>
                <th>Municipio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.tipo}</td>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.estado}</td>
                  <td>{usuario.correo}</td>
                  <td>{usuario.telefono}</td>
                  <td>{usuario.departamento}</td>
                  <td>{usuario.municipio}</td>
                  <td>
                    <a href="#">Editar</a>
                    <a href="#" className="delete">
                      Eliminar
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
