import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SnippetsOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "./MenuSider.scss";


export const MenuSider = (props) => {
  const { Sider } = Layout;
  const location = useLocation();
  const navigate = useNavigate();
  const menuItems = [
    {
      key: "/admin/novedades",
      icon: <SnippetsOutlined />,
      label: <span className="navbar-text">Novedades</span>,
    },
    {
      key: "/admin/asesoria",
      icon: <SnippetsOutlined />,
      label: <span className="navbar-text">Asesoria</span>,
    },
    {
      key: "/admin/excusas",
      icon: <SnippetsOutlined />,
      label: <span className="navbar-text">Excusas</span>,
    },
    {
      key: "/admin/consultas",
      icon: <SnippetsOutlined />,
      label: <span className="navbar-text">Consultas</span>,
    },
    {
      key: "/admin/horario",
      icon: <SnippetsOutlined />,
      label: <span className="navbar-text">Horario</span>,
    },
    {
      key: "/admin/agenda",
      icon: <SnippetsOutlined />,
      label: <span className="navbar-text">Agenda</span>,
    },
    {
      key: "/admin/misCitas",
      icon: <SnippetsOutlined />,
      label: <span className="navbar-text">Mis Citas</span>,
    },
  ];

  const menuClick = (e) => {
    const path = e.key;
    console.log("Di clic en el menu" + path);
    navigate(path);
  };
  
  return (
    <Sider className="menu-sider" collapsed={props.menuCollapsed}>
      <Menu
        className="menu-sider"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        onClick={menuClick}
        items={menuItems}
      />
    </Sider>
  );
};
