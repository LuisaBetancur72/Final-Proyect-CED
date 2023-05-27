import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { ArrowRightOutlined, CloseOutlined } from '@ant-design/icons';
import { useForm } from 'antd/lib/form/Form';
import * as Yup from 'yup';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import "./Singin.scss";

const valuesLogin = {
  username: '',
  password: '',
};

const validateLogin = Yup.object().shape({
  username: Yup.string().required('Es necesario el correo'),
  password: Yup.string().required('Es necesaria la contraseña'),
});

export const Singin = () => {
  const [form] = useForm();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (values) => {
    axios
      .post('http://127.0.0.1:5000/api/v1/login', values, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        const { access_token, refresh_token } = response.data;
        Cookies.set('access_token', access_token);
        Cookies.set('refresh_token', refresh_token);

        setIsLoggedIn(true);
        form.resetFields();

        // Redireccionar a la página de administrador después del inicio de sesión exitoso
        navigate('/admin');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const onFinish = (values) => {
    handleLogin(values);
  };

  useEffect(() => {
    const access_token = Cookies.get('access_token');
    const refresh_token = Cookies.get('refresh_token');

    if (access_token && refresh_token && access_token !== '' && refresh_token !== '') {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <div>
        <h1 style={{ textAlign: 'center', fontFamily: 'Fira Sans Light', color: '#0069A3' }}>CED</h1>
        <h1 style={{ textAlign: 'center', fontFamily: 'Fira Sans Light', color: '#0069A3' }}>Comunicacion Estudiantes Directivos/Docentes </h1>
        <Form
          form={form}
          initialValues={valuesLogin}
          validateSchema={validateLogin}
          onFinish={onFinish}
          name="basic"
        >
          <Form.Item
            label={<span className="label-text-sigin">Correo</span>}
            name="username"
            rules={[
              {
                required: true,
                message: 'Por favor ingrese su correo!',
              },
            ]}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Input className="input-field-sigin" />
          </Form.Item>
          <Form.Item
            label={<span className="label-text-sigin">Contraseña</span>}
            name="password"
            rules={[
              {
                required: true,
                message: 'Por favor ingrese su contraseña!',
              },
            ]}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Input.Password className="input-field-sigin" />
          </Form.Item>

          <Form.Item
            name="remember"
            wrapperCol={{ offset: 8, span: 16 }}
            className="checkbox-container-sigin"
          >
            <Checkbox className="checkbox-text-sigin"> Mantener sesión iniciada</Checkbox>
          </Form.Item>
          <Form.Item>
            <div className="button-container-sigin">
              {!isLoggedIn && (
                <Button className="ingresar-button-sigin" htmlType="submit">
                  Iniciar Sesión <ArrowRightOutlined />
                </Button>
              )}
              &nbsp;&nbsp;
              <Button className="custom-button-sigin" onClick={handleGoHome}>
                Atras <CloseOutlined />
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
