import React from "react";
import { Row, Col } from "antd";
import "./FooterPage.scss";


export const FooterPage = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={12} md={8}>
            <h4>Contáctanos</h4>
            <p>01-8000-510123</p>
            <p>(606) 8727272 - 8727709
              <br></br>
            Ext: 102 - 110 - 144</p>
            <p>+57 312 7679859 - 317 8940741</p>
            <p>
            <a href="mailto:servicioalcliente@autonoma.edu.co" itemprop="email">servicioalcliente@autonoma.edu.co</a>
            </p>
            <p>
            <a href="mailto:notificacionesyconsultas@autonoma.edu.co" itemprop="email">notificacionesyconsultas@autonoma.edu.co</a>
            </p>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <br></br>
            <br></br>
            <p>Antigua Estación del Ferrocarril Manizales - <br></br>Caldas - Colombia&nbsp;<a href="https://www.google.com/maps/place/Universidad+Aut%C3%B3noma+de+Manizales/@5.0685718,-75.5037043,16z/data=!4m5!3m4!1s0x8e476f8c1179651b:0x18322787cebd6883!8m2!3d5.0679838!4d-75.5030733?hl=es">Ubicación en Google Maps</a></p>
            <p>Personería Jurídica: Resolución No. 1549 del <br></br>25 de Febrero de 1981. MEN Reconocimiento <br></br>como Universidad: Resolución No. 03276 del <br></br>25 de Junio de 1993</p>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <br></br>
            <br></br>
            <p><a href="  https://www.autonoma.edu.co/sites/default/files/2022-11/DERECHOS%20PECUNIARIOS%20%20-2023.pdf" target="_blank"><span>Aviso de privacidad</span>&nbsp;<span>|&nbsp;</span></a>
            <a href="https://www.autonoma.edu.co/sites/default/files/2022-08/Politica-tratamiento-de-datos-personales.pdf" target="_blank"><span>Política de Tratamiento de <br></br>Datos Personales</span>&nbsp;<span>|&nbsp;</span></a>
            <a href="/sites/default/files/2022-01/terminos-y-condiciones.pdf" target="_blank">Términos y condiciones de <br></br>uso&nbsp;<span>|&nbsp;</span></a>
            <a href="/sites/default/files/2022-11/DERECHOS%20PECUNIARIOS%20%20-2023.pdf" target="_blank">Derechos Pecuniarios&nbsp;<span>|&nbsp;</span></a>
            <a href="/blog/articulos/protocolos-de-bioseguridad-uam" target="_blank">Protocolos de bioseguridad</a>
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

