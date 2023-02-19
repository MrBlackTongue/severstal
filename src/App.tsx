import './App.css';
import React, {useState} from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UnorderedListOutlined,
  FormOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import {Layout, Menu, theme, Collapse, Typography} from 'antd';
import {Routes, Route, Link} from 'react-router-dom';
import Home from "../src/layout/modules/home/home";
import PageGet from "./layout/modules/pageGet/pageGet";
import PagePost from "./layout/modules/pagePost/pagePost";
import PageDelete from "./layout/modules/pageDelete/pageDelete";

const {Header, Sider, Content, Footer} = Layout;
const { Panel } = Collapse;
const { Title } = Typography;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [apiRequests, setApiRequests] = useState<string[]>([]);

  const {
    token: {colorBgContainer},
  } = theme.useToken();

  const handleApiRequest = async (url: any) => {
    const time = new Date().toLocaleString();
    const request = `${time} - ${url}`;
    setApiRequests([...apiRequests, request]);
  };

  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} width={240} theme="light">
          <Header style={{padding: 0, background: colorBgContainer}}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Menu
            theme="light"
            mode="inline"
            items={[
              {
                key: '1',
                icon: <Link to='/get'><UnorderedListOutlined/></Link>,
                label: 'GET',
              },
              {
                key: '2',
                icon: <Link to='/post'><FormOutlined /></Link>,
                label: 'POST',
              },
              {
                key: '3',
                icon: <Link to='/delete'><DeleteOutlined /></Link>,
                label: 'DELETE',
              },
            ]}
          >
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header style={{padding: 0, background: colorBgContainer}}>
            <Title level={3}>Тестовое задание</Title>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: '8px',
            }}
          >
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/get' element={<PageGet recordRequest={handleApiRequest}/>}/>
              <Route path='/post' element={<PagePost recordRequest={handleApiRequest}/>}/>
              <Route path='/delete' element={<PageDelete recordRequest={handleApiRequest}/>}/>
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <Collapse defaultActiveKey={['1']}>
              <Panel header="API Requests" key="1">
                {apiRequests.map((request, index) => (
                  <p key={index}>{request}</p>
                ))}
              </Panel>
            </Collapse>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
