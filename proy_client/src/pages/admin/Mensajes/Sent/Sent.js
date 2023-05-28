import React from "react";
import "./Sent.scss";

export const Sent = () => {
  const mensajes = [
    {
      id: 1,
      destinatario: "Administrador",
      fecha: "John Doe",
      categoria: "johndoe@example.com",
    },
    {
      id: 1,
      destinatario: "Administrador",
      fecha: "John Doe",
      categoria: "johndoe@example.com",
    },
    {
      id: 1,
      destinatario: "Administrador",
      fecha: "John Doe",
      categoria: "johndoe@example.com",
    },
    // Agrega más usuarios aquí
  ];

  const handleDelete = (id) => {
    // Lógica para eliminar el usuario con el ID proporcionado
    // Puedes enviar una solicitud HTTP DELETE a la URI http://127.0.0.1:5000/api/v1/usuarios/<id>
    console.log(`Eliminar usuario con ID: ${id}`);
  };

  return (
    <div className="mensajes__center">
      <div className="mensajes__center--left">
        <div className="mensajes__background">
          <h2 className="mensajes-heading">Mensajes</h2>
          <div className="search-container">
            <input type="text" placeholder="Buscar Mensaje" className="buscar-mensaje" />
            &nbsp;&nbsp;
            <button className="buscar-button">Buscar</button>
          </div>
          <br></br>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Destinatario</th>
                <th>Fecha</th>
                <th>Categoria</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {mensajes.map((mensajes) => (
                <tr key={mensajes.id}>
                  <td>{mensajes.id}</td>
                  <td>{mensajes.destinatario}</td>
                  <td>{mensajes.fecha}</td>
                  <td>{mensajes.categoria}</td>
                  <td>
                    <a href="#" className="delete-mensaje">
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
