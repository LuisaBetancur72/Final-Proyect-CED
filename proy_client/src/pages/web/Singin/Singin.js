import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { ArrowRightOutlined, CloseOutlined } from '@ant-design/icons';
import './Singin.scss';
import { useForm } from 'antd/lib/form/Form';
import * as Yup from 'yup';
import axios from 'axios';

const valuesLogin={
  username:"",
  password:"",
}

const validateLogin= Yup.object().shape({
  username: Yup.string().required('es necesario el correo'),
  password: Yup.string().required('es necesario la contraseña')
})

export const Singin = () => {
  const [form] = useForm();

  const handleRegister = (values) => {
    axios
    .post('http://127.0.0.1:5000/api/v1/login', values, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        // Manejar la respuesta del servidor
        console.log(response.data);
        form.resetFields();
      })
      .catch(error => {
        // Manejar el error si ocurre
        console.error(error);
      });
  };

const onFinish= (values)=>{
  handleRegister(values)
};

  return (
    <div >
      <div>
        <h1 style={{ textAlign: 'center', fontFamily:'Fira Sans Light', color: '#0069A3' }}>CED</h1>
        <h1 style={{ textAlign: 'center',fontFamily:'Fira Sans Light', color: '#0069A3' }}>Comuniciacion Estudiantes Directivos/Docentes </h1>
        <Form
          form={form}
          valuesLogin={valuesLogin}
          validate={validateLogin}
          onFinish={onFinish}
          name="basic"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item label={<span className="label-text-sigin">Correo</span>} name="username"
            rules={[
              {
                required: true,
                message: 'Por favor ingrese su correo!',
              },
            ]}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Input className='input-field-sigin' />
          </Form.Item>
          <Form.Item label={<span className="label-text-sigin">Contraseña</span>}  name="password"
            rules={[
              {
                required: true,
                message: 'Por favor ingrese su contraseña!',
              },
            ]}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Input.Password className='input-field-sigin' />
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
              <Button
                //href="#"
                className="ingresar-button-sigin"
                htmlType="submit"
              >
                Iniciar Sesión <ArrowRightOutlined />
              </Button>
              &nbsp;&nbsp;
              <Button
                href="/"
                className="custom-button-sigin"
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