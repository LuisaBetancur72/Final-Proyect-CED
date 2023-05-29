import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Usuarios.scss";
import { Button } from "antd";


export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [foundUser, setFoundUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Realizar solicitud HTTP para obtener los datos de los usuarios desde la base de datos
    fetch("http://127.0.0.1:5000/api/v1/users/all")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
      });
  }, []);

  const handleDelete = (id) => {
    // Enviar solicitud HTTP DELETE para eliminar el usuario de la base de datos
    fetch(`http://127.0.0.1:5000/api/v1/users/delete/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        // Eliminar el usuario del estado de usuarios
        const updatedUsuarios = usuarios.filter((usuario) => usuario.id !== id);
        setUsuarios(updatedUsuarios);
        navigate("/admin/users/all");
      })
      .catch((error) => {
        console.error("Error al eliminar el usuario:", error);
      });
  };

  const handleEditUser = (id) => {
    
    // Guardar el ID del usuario seleccionado
    // Navegar a la página de edición de usuarios con el ID como parámetro
    navigate(`/admin/users/edit/${id}`);
  };

  const handleSearch = () => {
    const user = usuarios.find((usuario) => usuario.id === parseInt(searchId));
    setFoundUser(user || null);
  };

  return (
    <div className="usuarios__center">
      <div className="usuarios__center--left">
        <div className="usuarios__background">
          <h2 className="usuarios-heading">Usuarios</h2>
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar"
              className="buscar"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />
            &nbsp;&nbsp;
            <button className="buscar-buttom" onClick={handleSearch}>
              Buscar
            </button>
            &nbsp;&nbsp;
            <Button href="/admin/users/create" className="crear-button" htmlType="submit">
              Crear Usuario
            </Button>

          </div>
          <br></br>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Tipo de usuario</th>
                <th>Nombre completo</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th>Estado</th>
                <th>Departamento</th>
                <th>Municipio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {foundUser ? (
                <tr key={foundUser.id}>
                  <td>{foundUser.id}</td>
                  <td>{foundUser.type_user}</td>
                  <td>{foundUser.fullname}</td>
                  <td>{foundUser.email}</td>
                  <td>{foundUser.phone}</td>
                  <td>{foundUser.active? "Activo" : "Inactivo"}</td>
                  <td>{foundUser.Departamento}</td>
                  <td>{foundUser.Municipio}</td>
                  <td>
                    <Link to={`/admin/users/update/${foundUser.id}`}>Editar</Link>
                    <Link
                      to={`/admin/users/delete/${foundUser.id}`}
                      className="delete-link"
                      onClick={() => handleDelete(foundUser.id)}
                    >
                       Eliminar
                    </Link>
                  </td>
                </tr>
              ) : (
                usuarios.map((usuario) => (
                  <tr key={usuario.id}>
                    <td>{usuario.id}</td>
                    <td>{usuario.type_user}</td>
                    <td>{usuario.fullname}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.phone}</td>
                    <td>{usuario.acive? "Activo" : "Inactivo"}</td>
                    <td>{usuario.Departamento}</td>
                    <td>{usuario.Municipio}</td>
                    <td>
                      <Link to={`/admin/users/update/${usuario.id}`}>Editar</Link>
                      <Link
                      to={`/admin/users/delete/${usuario.id}`}
                      className="delete-link"
                      onClick={() => handleDelete(usuario.id)}
                    >
                       Eliminar
                    </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
