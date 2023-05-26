import React from "react";
import { Form, Input, Button, Select } from "antd";
import { ArrowRightOutlined, CloseOutlined } from '@ant-design/icons';
import './Register.scss';

const { Option } = Select;

export const Register = () => {
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
            <Select defaultValue="" className="custom-select" >
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
