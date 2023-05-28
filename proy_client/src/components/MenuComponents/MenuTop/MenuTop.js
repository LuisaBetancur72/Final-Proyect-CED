import { Button } from "antd";
import React from "react";
import logo from "../../../assets/img/png/logo.png";
import { MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined } from "@ant-design/icons";
import "./MenuTop.scss";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export const MenuTop = (props) => {
  const { menuCollapsed, setMenuCollapsed } = props;
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    navigate('/login');
  };

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Button style={{ width: "100px" }} type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <img src={logo} alt="Logo empresa" className="menu-top__left__logo" />
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={handleLogout} style={{ fontSize: '24px', fontWeight: 'bold', color: 'orange' }}>
          <LogoutOutlined />
        </Button>
      </div>
    </div>
  );
};
