import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Input, Select, Switch } from "antd";
import "./EditUser.scss";
import { ArrowRightOutlined, CloseOutlined } from "@ant-design/icons";

const { Option } = Select;

export const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [errorMessages, setErrorMessages] = useState([]);

  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState("");
  const [municipioSeleccionado, setMunicipioSeleccionado] = useState("");
  const [active, setActive] = useState("");

  useEffect(() => {
    // Realizar solicitud HTTP para obtener los detalles del usuario con el ID proporcionado
    fetch(`http://127.0.0.1:5000/api/v1/users/update/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        form.setFieldsValue(data);
      })
      .catch((error) => {
        console.error("Error al obtener los detalles del usuario:", error);
      });
  }, [id, form]);
  useEffect(() => {
    const fetchDepartamentos = async () => {
      try {
        const response = await fetch(
          "https://www.datos.gov.co/resource/xdk5-pm3f.json"
        );
        const data = await response.json();
        const departamentos = Array.from(
          new Set(data.map((municipio) => municipio.departamento))
        ).map((departamento) => ({
          value: departamento,
          label: departamento,
        }));
        departamentos.sort((a, b) => a.label.localeCompare(b.label));
        setDepartamentos(departamentos);
      } catch (error) {
        console.error("Error al obtener los departamentos:", error);
      }
    };

    fetchDepartamentos();
  }, []);

  const fetchMunicipios = async (departamento) => {
    try {
      const response = await fetch(
        `https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=${departamento}`
      );
      const data = await response.json();

      if (
        Array.isArray(data) &&
        data.length > 0 &&
        data[0].c_digo_dane_del_municipio
      ) {
        const municipios = data.map((municipio) => ({
          value: municipio.municipio,
          label: municipio.municipio,
        }));
        municipios.sort((a, b) => a.label.localeCompare(b.label));
        setMunicipios(municipios);
      } else {
        console.error(
          "Error: Los datos de municipios no tienen la estructura esperada"
        );
        setMunicipios([]);
      }
    } catch (error) {
      console.error("Error al obtener los municipios:", error);
      setMunicipios([]);
    }
  };
  const handleDepartamentoChange = (value) => {
    setDepartamentoSeleccionado(value);
    setMunicipioSeleccionado("");
    fetchMunicipios(value);
  };

  const handleSwitchChange = (value) => {
    setActive(value); // Actualizar el estado del interruptor (switch)
  };

  const handleUpdate = () => {
    form
      .validateFields()
      .then((values) => {
        setLoading(true);

        // Realizar solicitud HTTP para actualizar el usuario con los valores proporcionados
        fetch(`http://127.0.0.1:5000/api/v1/users/update/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Usuario actualizado:", data);
            setLoading(false);
            form.resetFields();
            // Realizar cualquier acción adicional después de la actualización exitosa, como redireccionar a otra página
          })
          .catch((error) => {
            console.error("Error al actualizar el usuario:", error);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.error("Error de validación del formulario:", error);
      });
  };

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="edit__center">
      <div className="edit__center--left">
        <div className="edit__background">
          <h2 className="edit-heading">Editar Usuario</h2>

          <div>
            <div>
              <Form form={form} name="basic">
                <Form.Item
                  label={
                    <span className="label-text-edit">Tipo de Usuario</span>
                  }
                  name="type_user"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese el tipo de usuario",
                    },
                  ]}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                >
                  <Input className="input-field-edit" />
                </Form.Item>
                <Form.Item
                  label={
                    <span className="label-text-edit">Nombre completo</span>
                  }
                  name="fullname"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese su nombre completo!",
                    },
                  ]}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                >
                  <Input className="input-field-edit" />
                </Form.Item>
                <Form.Item
                  label={<span className="label-text-edit">Estado</span>}
                  name="active"
                  initialValue={active}
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese el estado del usuario!",
                    },
                  ]}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                >
                  <Switch onChange={handleSwitchChange} checked={active} />
                </Form.Item>
                <Form.Item
                  label={<span className="label-text-edit">Correo</span>}
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese su correo!",
                    },
                    {
                      type: "email",
                      message: "El correo no es válido",
                    },
                    {
                      pattern: /^[a-zA-Z0-9._%+-]+@autonoma\.com$/,
                      message: "El correo debe ser de dominio autonoma.com",
                    },
                  ]}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                >
                  <Input className="input-field-edit" />
                </Form.Item>
                <Form.Item
                  label={<span className="label-text-edit">Contraseña</span>}
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese su contraseña!",
                    },
                  ]}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                >
                  <Input.Password className="input-field-edit" />
                </Form.Item>
                <Form.Item
                  label={<span className="label-text-edit">Teléfono</span>}
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese su número de teléfono!",
                    },
                  ]}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                >
                  <Input className="input-field-edit" />
                </Form.Item>

                {errorMessages && errorMessages.length > 0 && (
                  <Form.Item>
                    <div className="error-list">
                      {errorMessages.map((error, index) => (
                        <div key={index} className="error-message">
                          {error}
                        </div>
                      ))}
                    </div>
                  </Form.Item>
                )}

                <Form.Item
                  label={<span className="label-text-edit">Departamento</span>}
                  name="Departamento"
                  rules={[
                    {
                      required: true,
                      message: "Por favor seleccione un departamento",
                    },
                  ]}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                >
                  <Select
                    value={departamentoSeleccionado}
                    onChange={handleDepartamentoChange}
                    className="custom-select"
                  >
                    <Option value="" disabled>
                      Seleccione un departamento
                    </Option>
                    {departamentos.map((departamento) => (
                      <Option
                        key={departamento.value}
                        value={departamento.value}
                      >
                        {departamento.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  label={<span className="label-text-edit">Municipio</span>}
                  name="Municipio"
                  rules={[
                    {
                      required: true,
                      message: "Por favor seleccione un municipio",
                    },
                  ]}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                >
                  <Select
                    value={municipioSeleccionado}
                    onChange={(value) => setMunicipioSeleccionado(value)}
                    className="custom-select"
                    disabled={!departamentoSeleccionado}
                  >
                    <Option value="" disabled>
                      Seleccione un municipio
                    </Option>
                    {municipios.map((municipio) => (
                      <Option key={municipio.value} value={municipio.value}>
                        {municipio.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item>
                  <div className="button-container-editar">
                    <Button
                      className="edit"
                      htmlType="submit"
                      onClick={handleUpdate}
                      loading={loading}
                    >
                      Editar <ArrowRightOutlined />
                    </Button>
                    &nbsp;&nbsp;
                    <Button
                      href="/admin/users"
                      className="cancelar-button"
                      htmlType="submit"
                    >
                      Atrás <CloseOutlined />
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
