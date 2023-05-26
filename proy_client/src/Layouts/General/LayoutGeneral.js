import React, { useState } from 'react'
import { Layout } from 'antd'
import { MenuSider } from '../../components/MenuComponents/MenuSider/MenuSider';
import { MenuTop } from '../../components/MenuComponents/MenuTop/MenuTop';
import { FooterPage } from "../../components/FooterPage";
import "./LayoutGeneral.scss";

export const LayoutGeneral = (props) => {
    const { children } = props;
    const { Content, Header, Footer } = Layout;
    const [menuCollapsed, setMenuCollapsed] = useState(false);

    return (
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed} />
            <Layout className='Layout-general' style={{ marginLeft: menuCollapsed ? "100px" : "300px" }}>
                <Header className='Layout-general__header'>
                    <MenuTop
                        menuCollapsed={menuCollapsed}
                        setMenuCollapsed={setMenuCollapsed}
                    />
                </Header>
                <Content className="layout-general-content">{children}</Content>
                <Footer className="layout-general-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FooterPage></FooterPage>
                </Footer>
            </Layout>
        </Layout>
    )
}

