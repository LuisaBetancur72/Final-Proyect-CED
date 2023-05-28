import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { ArrowRightOutlined, CloseOutlined } from "@ant-design/icons";
import "./CreateUser.scss";
import * as Yup from "yup";
import axios from "axios";

const { Option } = Select;

const valuesRegister = {
  UserType: "",
  Fullname: "",
  email: "",
  password: "",
  Phone: "",
};

const validateRegister = Yup.object().shape({
  UserType: Yup.string().required("Seleccione el tipo de usuario"),
  Fullname: Yup.string().required("Ingrese el nombre completo"),
  email: Yup.string()
    .required("Es necesario el correo")
    .matches(
      /^[a-zA-Z0-9._%+-]+@autonoma\.com$/,
      "El correo debe ser de dominio autonoma.com"
    ),
  password: Yup.string().required("Es necesario la contraseña"),
  Phone: Yup.string().required("Es necesario el número de teléfono"),
});

export const CreateUser = () => {
  const [form] = Form.useForm();
  const [errorMessages, setErrorMessages] = useState([]);

  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState("");
  const [municipioSeleccionado, setMunicipioSeleccionado] = useState("");

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
          value: municipio.c_digo_dane_del_municipio,
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

  const handleRegister = (values) => {
    axios
      .post("http://localhost:5000/api/v1/users", values, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        form.resetFields();
        setErrorMessages([]);
      })
      .catch((error) => {
        console.error(error.response);
        setErrorMessages(error.response.data.errors);
      });
  };

  const onFinish = (values) => {
    handleRegister(values);
  };

  return (
    <div className="create__center">
      <div className="create__center--left">
        <div className="create__background">
          <h2 className="create-heading">Crear Un Nuevo Usuario</h2>

          <div>
            <div>
              <Form
                form={form}
                initialValues={valuesRegister}
                validationSchema={validateRegister}
                onFinish={onFinish}
                name="basic"
              >
                <Form.Item
                  label={
                    <span className="label-text-create">Tipo de Usuario</span>
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
                  <Input className="input-field-create" />
                </Form.Item>
                <Form.Item
                  label={
                    <span className="label-text-create">Nombre completo</span>
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
                  <Input className="input-field-create" />
                </Form.Item>
                <Form.Item
                  label={<span className="label-text-create">Estado</span>}
                  name="status"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese el estado del usuario!",
                    },
                  ]}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                >
                  <Input className="input-field-create" />
                </Form.Item>
                <Form.Item
                  label={<span className="label-text-create">Correo</span>}
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
                  <Input className="input-field-create" />
                </Form.Item>
                <Form.Item
                  label={
                    <span className="label-text-create">Contraseña</span>
                  }
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
                  <Input.Password className="input-field-create" />
                </Form.Item>
                <Form.Item
                  label={<span className="label-text-create">Teléfono</span>}
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
                  <Input className="input-field-create" />
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
                  label={
                    <span className="label-text-create">Departamento</span>
                  }
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
                  label={<span className="label-text-create">Municipio</span>}
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
                  <div className="button-container-create">
                    <Button
                      className="create-button"
                      htmlType="submit"
                    >
                      Crear <ArrowRightOutlined />
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
