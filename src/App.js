import logo from './logo.svg';
import './App.css';
import { Breadcrumb, Layout, Menu, Button, Input } from 'antd'
import React, { useState } from 'react'
import { MENU_CONFIG, MENU_KEYS } from './utils/const'
import { useHistory } from 'react-router'
import { useLocation, Link } from 'react-router-dom'
import Content from './pages/Content'
const onSearch = (value) => console.log(value)
const { Header, Sider, Footer } = Layout;
const { Search } = Input

function App({children}) {
  const location = useLocation()
  const {push} = useHistory()
  const [currPath, setCurrPath] = useState(location.pathname?.split('/')?.[1] || '')
  const [currSubPath, setCurrSubPath] = useState(location.pathname?.split('/')?.[2] || '')
  const handleMenuItemClick = (e) => {
    const [subPath, path] = e.keyPath
    if (currPath !== path || currSubPath !== subPath) {
      push('/' + path + '/' + subPath)
      setCurrPath(path)
      setCurrSubPath(subPath)
    }
  }
  return (
    <div className="App">
      <Layout>
    <Header className="header">
      <div className="logo">
        <img className='logo-icon' src={logo} alt="logo" />
        <b>A MintScan Like App</b>
      </div>
      {/* <Breadcrumb
          className='breadcrumb'
          items={[
          {
              title: <Link to={'/' + currPath}>{currPath}</Link>,
          },
          {
              title: <Link to={'/' + currPath + (currSubPath ? '/' + currSubPath : '')}>{currSubPath}</Link>,
          }]} /> */}
      <Breadcrumb className='breadcrumb'>
          <Breadcrumb.Item>
            <Link to={'/' + currPath}>{currPath}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={'/' + currPath + (currSubPath ? '/' + currSubPath : '')}>{currSubPath}</Link>
          </Breadcrumb.Item>
      </Breadcrumb>
      <Search className='search-bar' placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
      <div className="header-tab">
          <Button className='tab-btn' type='link' to="/">Home</Button>
          <Button className='tab-btn' type='link' to="/about">About</Button>
      </div>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          // defaultSelectedKeys={['']}
          defaultOpenKeys={MENU_KEYS}
          style={{ height: '100%', borderRight: 0 }}
          items={MENU_CONFIG}
          onClick={(e) => { handleMenuItemClick(e) }}
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
        >
          {children}
        </Content>
      </Layout>
    </Layout>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>

    </div>
  );
}

export default App;
