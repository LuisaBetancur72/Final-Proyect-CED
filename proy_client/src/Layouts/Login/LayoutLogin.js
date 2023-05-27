import React from 'react';
import { Layout } from 'antd';
import "./LayoutLogin.scss";
import logo from "../../assets/img/png/Logos_UAM.png";

export const LayoutLogin = (props) => {
  const { children } = props;
  const { Content } = Layout;
  
  return (
      <div className='sign-in__center'>
          <div className='sign-in__center--left'>
              <img src={logo} alt="Logo empresa" className="menu-top__left__logo" />
              <div className='sign-in__background'>
                  <Content className='layout-general-content'>{children}</Content>
              </div>
          </div>
      </div>
  );
};
