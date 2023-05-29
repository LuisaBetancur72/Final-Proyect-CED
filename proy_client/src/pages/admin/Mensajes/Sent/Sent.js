import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Sent.scss";

export const Sent = () => {
  const [searchId, setSearchId] = useState(""); // Define searchId state variable
  const [foundUser, setFoundUser] = useState(null); // Define foundUser state variable
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    fetchMensajes();
  }, []);

  const fetchMensajes = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/v1/user/messages/all");
      setMensajes(response.data);
    } catch (error) {
      console.error("Error al obtener los mensajes:", error);
    }
  };

  const handleDelete = (id) => {
    // Lógica para eliminar el mensaje con el ID proporcionado
    // Puedes enviar una solicitud HTTP DELETE a la URI http://127.0.0.1:5000/api/v1/mensajes/<id>
    console.log(`Eliminar mensaje con ID: ${id}`);
  };

  const handleSearch = () => {
    if (searchId === "") {
      fetchMensajes();
    } else {
      const mensajesFiltrados = mensajes.filter((mensaje) => mensaje.id === parseInt(searchId));
      setMensajes(mensajesFiltrados);
    }
  };

  const handleInputChange = (event) => {
    setSearchId(event.target.value);
  };

  return (
    <div className="mensajes__center">
      <div className="mensajes__center--left">
        <div className="mensajes__background">
          <h2 className="mensajes-heading">Mensajes</h2>
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar Mensaje"
              className="buscar-mensaje"
              value={searchId}
              onChange={handleInputChange} // Add onChange event handler
            />
            &nbsp;&nbsp;
            <button className="buscar-button" onClick={handleSearch}>
              Buscar
            </button>
          </div>
          <br></br>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Destinatario</th>
                <th>Fecha</th>
                <th>Categoria</th>
                <th>Creador</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {mensajes.map((mensaje) => (
                <tr key={mensaje.id}>
                  <td>{mensaje.id}</td>
                  <td>{mensaje.addressee}</td>
                  <td>{mensaje.created_at}</td>
                  <td>{mensaje.type_message}</td>
                  <td>{mensaje.creator_user}</td>
                  <td>
                    <a href="#" className="delete-mensaje" onClick={() => handleDelete(mensaje.id)}>
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
