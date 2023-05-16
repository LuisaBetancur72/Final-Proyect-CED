import React from 'react';
import { Form, Input, Button, } from 'antd';

export const Register = () => {

    return (
      <div >
        <div>
          <h1 style={{ textAlign: 'center', fontFamily:'Fira Sans Light', color: '#0069A3' }}>CED</h1>
          <h1 style={{ textAlign: 'center',fontFamily:'Fira Sans Light', color: '#0069A3' }}>Registro de Usuario </h1>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
          >
            <Form.Item label="User" name="UserType"
              rules={[
                {
                  required: true,
                  message: 'Please input your kind of user!',
                },
              ]}
            >
                <Input />
            </Form.Item> 
            <Form.Item label="Fullname" name="Fullname"
              rules={[
                {
                  required: true,
                  message: 'Please input your full name!',
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
            <Form.Item label="Phone" name="Phone"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]}
            >
                <Input />
            </Form.Item> 
  
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Registrarse
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