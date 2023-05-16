import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

export const Singin = () => {

  return (
    <div >
      <div>
        <h1 style={{ textAlign: 'center', fontFamily:'Fira Sans Light', color: '#0069A3' }}>CED</h1>
        <h1 style={{ textAlign: 'center',fontFamily:'Fira Sans Light', color: '#0069A3' }}>Comuniciacion Estudiantes Docentes </h1>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item label="Username" name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox> Mantener sesión iniciada</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Iniciar Sesión
            </Button>&nbsp;&nbsp;
            <Button href="/" htmlType="submit">
              Atrás
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};