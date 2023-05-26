import React from "react";
import { Select, Input, Button, Form } from "antd";
import "./Redactar.scss";
import TextArea from "antd/es/input/TextArea";
import { Option } from "antd/es/mentions";

export const redactar = () => {
  return (
    <div className="write__center">
      <div className="write__center--left">
        <div className="write__background">
          <Form
            name="basic"
            initialValues={{
              remember: true,
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
            name="UserType"
            rules={[
              {
                required: true,
                message: "Por favor ingrese Una categoría!",
              },
            ]}
          >
            <Select defaultValue="" className="custom-select" >
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

          <Button
                href="#"
                className="custom-button registrar-button"
                htmlType="submit"
              >
                Enviar 
              </Button>
              &nbsp;&nbsp;
              <Button
                href="/"
                className="custom-button-register"
                htmlType="submit"
              >
                Cancelar 
              </Button>

          </Form>
        </div>
      </div>
    </div>
  );
};
