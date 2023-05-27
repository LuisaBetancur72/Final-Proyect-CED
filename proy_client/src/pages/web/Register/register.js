import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { ArrowRightOutlined, CloseOutlined } from '@ant-design/icons';
import './Register.scss';

const { Option } = Select;

export const Register = () => {
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

  return (
    <div>
      <div>
        <h1 style={{ textAlign: 'center', fontFamily: 'Fira Sans Light', color: '#0069A3' }}>CED</h1>
        <h1 style={{ textAlign: 'center', fontFamily: 'Fira Sans Light', color: '#0069A3' }}>Comunicación Estudiantes Directivos/Docentes</h1>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            label={<span className="label-text-register">Tipo de usuario</span>}
            name="UserType"
            rules={[
              {
                required: true,
                message: "Por favor ingrese su tipo de usuario!",
              },
            ]}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Select defaultValue="" className="custom-select">
              <Option value="" disabled>
                Seleccione una opción
              </Option>
              <Option value="Estudiante">Estudiante</Option>
              <Option value="Profesor">Profesor</Option>
              <Option value="Coordinador">Coordinador</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label={<span className="label-text-register">Nombre completo</span>}
            name="Fullname"
            rules={[
              {
                required: true,
                message: "Por favor ingrese su nombre completo!",
              },
            ]}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Input className="input-field" />
          </Form.Item>
          <Form.Item
            label={<span className="label-text-register">Contraseña</span>}
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
            <Input.Password className="input-field" />
          </Form.Item>
          <Form.Item
            label={<span className="label-text-register">Telefono</span>}
            name="Phone"
            rules={[
              {
                required: true,
                message: "Por favor ingrese su número de teléfono!",
              },
            ]}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Input className="input-field" />
          </Form.Item>
          <Form.Item
            label={<span className="label-text-register">Departamento</span>}
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
                <Option key={departamento.value} value={departamento.value}>
                  {departamento.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label={<span className="label-text-register">Municipio</span>}
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
            <div className="button-container-register">
              <Button
                href="#"
                className="custom-button registrar-button"
                htmlType="submit"
              >
                Registrarse <ArrowRightOutlined />
              </Button>
              &nbsp;&nbsp;
              <Button
                href="/"
                className="custom-button-register"
                htmlType="submit"
              >
                Atrás <CloseOutlined />
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
