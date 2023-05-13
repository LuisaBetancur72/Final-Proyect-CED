import React, { useState } from 'react'
import { Button, Layout } from 'antd'
import { MenuSider } from '../components/MenuComponents/MenuSider/MenuSider';
import { MenuTop } from '../components/MenuComponents/MenuTop/MenuTop';
import { GithubOutlined } from '@ant-design/icons';
import "./LayoutGeneral.scss";

export const LayoutGeneral = (props) => {
    const {children}=props;
    const {Content, Header, Footer} = Layout;
    const [menuCollapsed, setMenuCollapsed]= useState(false);
  return (
    <Layout>
      <MenuSider menuCollapsed = {menuCollapsed}/>
        <Layout className='Layout-general' style={{marginLeft: menuCollapsed ? "100px" : "300px"}}>
          <Header className='Layout-general__header'>
            <MenuTop  
              menuCollapsed={menuCollapsed} 
              setMenuCollapsed={setMenuCollapsed}
            />
          </Header>
          <Content>{children}</Content>
          <Footer>
            <Button type='link' onClick={() => console.log("Ir a GitHub")}>
              <GithubOutlined style={{fontSize: "20px"}}/>
            </Button>
          </Footer>
        </Layout>
    </Layout>
  )
}
