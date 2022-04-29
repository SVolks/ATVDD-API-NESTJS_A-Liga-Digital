import './App.css';
import { Menu, Layout } from 'antd';
import Routes from './routes';
import {PlusOutlined, UnorderedListOutlined, HomeOutlined, GithubOutlined} from '@ant-design/icons'
import { useHistory } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

function App() {

  let history = useHistory();

  function handleClick(){
    history.push("/adicionar");
  }
  function listaProduto(){
    history.push("/produtos")
  }
  
  function telaInicial(){
    history.push("/")
  }

  return (
    <div className="main">
      <Layout className='main_content'>
        <Header className='header'>Header</Header>
      <Layout>
        <Sider className='menu'>
          <Menu className='menu_section'>
            <Menu.Item key={0} icon={<HomeOutlined />} onClick={telaInicial}>
              Tela Inicial
            </Menu.Item>
            <Menu.Item key={1} icon={<PlusOutlined />} onClick={handleClick}>
              Adicionar Produto
            </Menu.Item>
            <Menu.Item key={2} icon={<UnorderedListOutlined />} onClick={listaProduto}>
              Lista de Produtos
            </Menu.Item>
            <p><a href='https://github.com/SVolks' target='_blank' rel="noreferrer">
              <Menu.Item key={3} icon={<GithubOutlined />}>
                GitHub
              </Menu.Item>
            </a></p>
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
