import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { ArrowRightOutlined, CloseOutlined } from '@ant-design/icons';
import './Singin.scss';

export const Singin = () => {

  return (
    <div >
      <div>
        <h1 style={{ textAlign: 'center', fontFamily:'Fira Sans Light', color: '#0069A3' }}>CED</h1>
        <h1 style={{ textAlign: 'center',fontFamily:'Fira Sans Light', color: '#0069A3' }}>Comuniciacion Estudiantes Directivos/Docentes </h1>
        <Form
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
                href="#"
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
