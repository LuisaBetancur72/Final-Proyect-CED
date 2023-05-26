import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BellOutlined, QuestionCircleOutlined, ExclamationCircleOutlined, ScheduleOutlined, FormOutlined, UnorderedListOutlined, MailOutlined, EditOutlined, UserOutlined, ExportOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "./MenuSider.scss";

const { SubMenu } = Menu;

export const MenuSider = (props) => {
  const { Sider } = Layout;
  const location = useLocation();
  const navigate = useNavigate();
  const menuItems = [
    {
      key: "/admin/novedades",
      icon: <BellOutlined />,
      label: <span className="navbar-text">Novedades</span>,
    },
    {
      key: "/admin/asesoria",
      icon: <QuestionCircleOutlined />,
      label: <span className="navbar-text">Asesoria</span>,
    },
    {
      key: "/admin/excusas",
      icon: <ExclamationCircleOutlined />,
      label: <span className="navbar-text">Excusas</span>,
    },
    {
      key: "/admin/horario",
      icon: <ScheduleOutlined />,
      label: <span className="navbar-text">Horario</span>,
    },
    {
      key: "/admin/agenda",
      icon: <FormOutlined />,
      label: <span className="navbar-text">Agendar</span>,
    },
    {
      key: "/admin/misCitas",
      icon: <UnorderedListOutlined />,
      label: <span className="navbar-text">Mis Citas</span>,
    },
    {
      key: "/admin/users",
      icon: <UserOutlined />,
      label: <span className="navbar-text">Usuarios</span>,
    },
    {
      key: "#",
      icon: <MailOutlined />,
      label: <span className="navbar-text">Mensajes</span>,
      subMenu: [
        {
          key: "/admin/mensajes/enviados",
          icon: <ExportOutlined />,
          label: <span className="navbar-text">Enviados</span>,
        },
        {
          key: "/admin/mensajes/redactar",
          icon: <EditOutlined />,
          label: <span className="navbar-text">Redactar</span>,
        },
      ],
    },
  ];

  const menuClick = (e) => {
    const path = e.key;
    console.log("Di clic en el menú" + path);
    navigate(path);
  };

  const renderMenuItems = (menuData) => {
    return menuData.map((menuItem) => {
      if (menuItem.subMenu) {
        return (
          <SubMenu key={menuItem.key} icon={menuItem.icon} title={menuItem.label}>
            {renderMenuItems(menuItem.subMenu)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={menuItem.key} icon={menuItem.icon}>
            {menuItem.label}
          </Menu.Item>
        );
      }
    });
  };

  return (
    <Sider className="menu-sider" collapsed={props.menuCollapsed}>
      <Menu
        className="menu-sider"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        onClick={menuClick}
      >
        {renderMenuItems(menuItems)}
      </Menu>
    </Sider>
  );
};
