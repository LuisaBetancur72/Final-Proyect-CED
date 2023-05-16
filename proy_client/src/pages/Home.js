import React from 'react'
import { Button } from 'antd';

export const Home = () => {
  return (
    <>
    <Button href="/admin/login" htmlType="submit">
      Ingresar
    </Button>&nbsp;&nbsp;
    
    <Button href="/register" htmlType="submit">
      Registrarse
    </Button>
    </>
  )
}
