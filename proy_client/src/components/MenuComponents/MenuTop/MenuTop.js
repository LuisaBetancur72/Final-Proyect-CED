import { Button } from "antd";
import React from "react";
import logo from "../../../assets/img/png/logo.png";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./MenuTop.scss";

//MenuTop recibe las propiedades y se las comparte a menuSider
//Las propiedades las recibe de LayoutGeneral+
//Propiedad: Saber si el menu esta o no extendido

export const MenuTop = (props) => {
  const { menuCollapsed, setMenuCollapsed } = props;

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Button style={{width: "100px"}} type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <img src={logo} alt="Logo empresa" className="menu-top__left__logo" />
      </div>
    </div>
  );
};
