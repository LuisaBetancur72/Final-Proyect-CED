import React, {useState, useEffect } from "react";
import { Select, Input, Button, Form } from "antd";
import "./Redactar.scss";
import jwt_decode from "jwt-decode";
import TextArea from "antd/es/input/TextArea";
import { Option } from "antd/es/mentions";
import * as Yup from 'yup';
import axios from 'axios';

const valuesMessage = {
  addressee: '',
  type_message: '',
  description: '',
  creator_user: ''
};

const validateMessage = Yup.object().shape({
  description: Yup.string().required('Ingrese una descripción'),
  addressee: Yup.string()
    .required('Es necesario el correo')
    .matches(
      /^[a-zA-Z0-9._%+-]+@autonoma\.com$/,
      'El correo debe ser de dominio autonoma.com'
    ),
  type_message: Yup.string().required('Es necesario el tipo de mensaje'),
  active: false
});

export const Redactar = () => {
  const [form] = Form.useForm();
  const [tokenID, setTokenID] = useState('');

  useEffect(() => {
    // Obtener el token desde el almacenamiento (por ejemplo, localStorage)
    const token = localStorage.getItem('token');

    if (token) {
      // Decodificar el token para obtener el ID
      const decodedToken = jwt_decode(token);
      const { email } = decodedToken; // Suponiendo que el ID está almacenado en la propiedad 'id'

      // Establecer el ID del token en el estado
      setTokenID(email);
    }
  }, []);

  const handleSendMessage = (values) => {
    const messageData = {
      addressee: values.addressee,
      type_message: values.type_message,
      description: values.description,
      creator_user: tokenID // Usar el ID del token aquí
    };

    axios
      .post("http://localhost:5000/api/v1/mensajes/redactar", messageData)
      .then((response) => {
        console.log(response.data);
        // Realizar acciones adicionales después de guardar el mensaje, como mostrar una notificación o redirigir a otra página
        form.resetFields();
      })
      .catch((error) => {
        console.error(error);
        // Manejar el error en caso de que ocurra
      });
  };

  const onFinish = (values) => {
    handleSendMessage(values);
  };


  return (
    <div className="write__center">
      <div className="write__center--left">
        <div className="write__background">
          <Form
            form={form}
            method="POST"
            initialMessage={valuesMessage}
            validationSchema={validateMessage}
            onFinish={onFinish}
            name="basic"
            initialValues={{   
              remember: true,
              creator_user : tokenID
            }}
          >
            <Form.Item
              label={<span className="label-text-register">Destinatario</span>}
              name="addressee"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese el destinatario!",
                },
              ]}
            >
              <Input className="input-field" />
            </Form.Item>

            <Form.Item
              label={<span className="label-text-register">Categoría</span>}
              name="type_message"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese una categoría!",
                },
              ]}
            >
              <Select defaultValue="" className="custom-select">
                <Option value="" disabled>
                  Seleccione una opción
                </Option>
                <Option value="excusa">Excusa</Option>
                <Option value="consulta">Consulta</Option>
                <Option value="solicitar-cita">Solicitar Cita</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label={<span className="label-text-register">Descripción</span>}
              name="description"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese una descripción!",
                },
              ]}
            >
              <TextArea className="input-field" rows={4} />
            </Form.Item>

            <div className="button-container-redactar">
              <Button className="enviar-button" htmlType="submit">
                Enviar
              </Button>
              &nbsp;&nbsp;
              <Button href="/" className="cancelar-button" htmlType="submit">
                Cancelar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
