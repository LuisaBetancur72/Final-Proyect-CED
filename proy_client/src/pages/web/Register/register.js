import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { ArrowRightOutlined, CloseOutlined } from '@ant-design/icons';
import './Register.scss';
import * as Yup from 'yup';
import axios from 'axios';

const { Option } = Select;

const valuesRegister = {
  UserType: '',
  Fullname: '',
  email: '',
  password: '',
  Phone: '',
};

const validateRegister = Yup.object().shape({
  UserType: Yup.string().required('Seleccione el tipo de usuario'),
  Fullname: Yup.string().required('Ingrese el nombre completo'),
  email: Yup.string()
    .required('Es necesario el correo')
    .matches(
      /^[a-zA-Z0-9._%+-]+@autonoma\.com$/,
      'El correo debe ser de dominio autonoma.com'
    ),
  password: Yup.string().required('Es necesario la contraseña'),
  Phone: Yup.string().required('Es necesario el número de teléfono'),
});

export const Register = () => {
  const [form] = Form.useForm();
  const [errorMessages, setErrorMessages] = useState([]);

  const handleRegister = (values) => {
    axios
      .post('http://localhost:5000/api/v1/users', values, {
        headers: {
          'Content-Type': 'application/json',
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
    <div>
      <div>
        <h1 style={{ textAlign: 'center', fontFamily: 'Fira Sans Light', color: '#0069A3' }}>CED</h1>
        <h1 style={{ textAlign: 'center', fontFamily: 'Fira Sans Light', color: '#0069A3' }}>Comunicación Estudiantes Directivos/Docentes</h1>
        <Form
          form={form}
          initialValues={valuesRegister}
          validationSchema={validateRegister}
          onFinish={onFinish}
          name="basic"
        >
          <Form.Item
            label={<span className="label-text-register">Tipo de Usuario</span>}
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
            <Input className="input-field" />
          </Form.Item>
          <Form.Item
            label={<span className="label-text-register">Nombre completo</span>}
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
            <Input className="input-field" />
          </Form.Item>
          <Form.Item
            label={<span className="label-text-register">Correo</span>}
            name="email"
            rules={[
              {
                required: true,
                message: "Por favor ingrese su correo!",
              },
              {
                type: 'email',
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
            label={<span className="label-text-register">Teléfono</span>}
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
            <Input className="input-field" />
          </Form.Item>

          {errorMessages && errorMessages.length > 0 && (
            <Form.Item>
              <div className="error-list">
                {errorMessages.map((error, index) => (
                  <div key={index} className="error-message">{error}</div>
                ))}
              </div>
            </Form.Item>
          )}

          <Form.Item>
            <div className="button-container-register">
              <Button
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
