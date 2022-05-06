import React, {useState} from "react";
import styled, {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import './App.css';
import { Menu, Layout } from 'antd';
import Routes from './routes';
import {PlusOutlined, UnorderedListOutlined, HomeOutlined, GithubOutlined} from '@ant-design/icons'
import { useHistory } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;
const StyledApp = styled.div``;

function App() {

  let history = useHistory();

  function handleClick(){
    history.push("/adicionar");
  }

  function listaProduto(){
    history.push("/produtos");
  }
  
  function telaInicial(){
    history.push("/");
  }

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") !== "dark" ? "light" : "dark"
  );
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>
      <GlobalStyles />
    <StyledApp className="main">
      <Layout className='main_content'>
        <Header className='header'>O que precisamos comprar?</Header>
      <Layout>
        <Sider className='menu'>
          <Menu className='menu_section'>
            <Menu.Item className='icon' key={0} icon={<HomeOutlined />} onClick={telaInicial}>
              <span className='text'>Tela Inicial</span>
            </Menu.Item>
            <Menu.Item className='icon' key={1} icon={<PlusOutlined />} onClick={handleClick}>
              <span className='text'>Adicionar Produto</span>
            </Menu.Item>
            <Menu.Item className='icon' key={2} icon={<UnorderedListOutlined />} onClick={listaProduto}>
             <span className='text'>Lista de Produtos</span>
            </Menu.Item>
            <button className="btn_menu" onClick={() => themeToggler()}>alterar tema</button>
              <Menu.Item className='icon git' key={3} icon={<GithubOutlined />}>
                <a href='https://github.com/SVolks' target='_blank' rel="noreferrer">
                  <span className='text_git'>GitHub</span>
                </a>
              </Menu.Item>
          </Menu>
        </Sider>
        <Content className='content'>
          <Routes />
        </Content>
      </Layout>
      <Footer className='footer'>Todos os Direitos Reservados</Footer>
      </Layout>
    </StyledApp>
    </ThemeProvider>
  );
}

export default App;