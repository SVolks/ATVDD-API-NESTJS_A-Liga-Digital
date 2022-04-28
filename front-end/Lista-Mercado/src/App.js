import './App.css';

import { Menu } from 'antd';
import Routes from './routes';
import {PlusOutlined, UnorderedListOutlined} from '@ant-design/icons'

import { useHistory } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function App() {

  const history = useHistory();

  return (
    <div className="main">
      <Layout className='main_content'>
        <Header className='header'>Header</Header>
      <Layout>
        <Sider className='menu'>
          <Menu className='menu_section'>
            <Menu.Item key={1} icon={<PlusOutlined />} onClick={() => history.push('./adicionar')}>
              Adicionar Produto
            </Menu.Item>
            <Menu.Item key={2} icon={<UnorderedListOutlined />} onClick={() => history.push('./produtos')}>
              Listar Produtos
            </Menu.Item>
          </Menu>
        </Sider>
        <Content className='content'>
          <Routes />
        </Content>
      </Layout>
      <Footer className='footer'>Todos os Direitos Reservados</Footer>
      </Layout>
    </div>
  );
}

export default App;
