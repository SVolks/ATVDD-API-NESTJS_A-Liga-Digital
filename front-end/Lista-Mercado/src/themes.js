import { createGlobalStyle } from "styled-components";
import {bgimg, bgimgdark} from './pages/assets/imgs';



export const lightTheme = {
    backgroundColor: '#f7f7f7',
    background: 'rgb(255, 207, 207)',
    backgroundCard: 'rgba(255, 247, 247, 0.949)',
    fontColor: '#000',
    border: 'rgba(217, 216, 216, 0.902)',
    colorGit: '#9e4343',
    btnProd: '#f7f7f7',
    borderBtnProd: 'rgba(217, 216, 216, 0.902)',
    prodH1: 'rgba(255, 247, 247, 0.949)',
    prodH1Color: '#000',
    colorPatch: '#000',
    bgInicio: 'linear-gradient(72deg, #f0fcee 1%, #ffacac 99%)',
    bGImg: bgimg,
    logoImg: 'none',
    btnExcluir: 'rgb(229, 51, 51)',
};

export const darkTheme = {
    backgroundColor: '#010414',
    background: 'rgb(90, 90, 90)',
    backgroundCard: 'rgba(189, 189, 189, 0.949)',
    fontColor: '#dfdfdf',
    border: 'rgb(0, 0, 0)',
    colorGit: '#181a48',
    btnProd: 'rgba(111, 113, 140, 0.949)',
    borderBtnProd: 'rgb(126, 126, 126)',
    prodH1: 'rgba(111, 113, 140, 0.949)',
    prodH1Color: '#000',
    colorPatch: '#000',
    bgInicio: 'linear-gradient(72deg, #979897 1%, #0b092a 99%)',
    bGImg: bgimgdark,
    logoImg: 'brightness(0.6)',
    btnExcluir: 'rgba(106, 5, 5, 0.949)', 
};

export const GlobalStyles = createGlobalStyle`
    .header, .menu, .menu_section{
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.fontColor};
        transition: .4s;
      }
    .icon, span {
        color: ${props => props.theme.fontColor};
        transition: .4s;
      }
    .inicio_container {
        background: ${props => props.theme.bgInicio};
        transition: .4s;
    }
    .footer {
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.fontColor};
        transition: .4s;
      }
    .menu_section .btn_menu{
        background: ${props => props.theme.background};
        color: ${props => props.theme.fontColor};
        border: 2px solid ${props => props.theme.border};
        transition: .4s;
      }
    .menu_section .git, .menu_section .text_git {
        color: ${props => props.theme.colorGit};
        transition: .4s;
      }
    .card, .form_produto, .card_det, .produ_container {
        background: ${props => props.theme.backgroundCard};
        transition: .4s;
    }
    .btn_prod, .btn_add, .editar-btn, .btn_det_edit{
        background-color: ${props => props.theme.btnProd};
        color: ${props => props.theme.fontColor};
        border: 2px solid ${props => props.theme.borderBtnProd};
        transition: .4s;
    }
    .btn_excluir {
        background-color: ${props => props.theme.btnExcluir};
        border: 2px solid ${props => props.theme.borderBtnProd};
        transition: .4s;
    }
    .produto_container h1{
        color: ${props => props.theme.prodH1Color};
        background-color: ${props => props.theme.prodH1};
        transition: .4s;
    }
    .produto_label {
        color: ${props => props.theme.colorPatch};
        transition: .4s;
    }
    .content {
        background-image: url(${props => props.theme.bGImg});
        transition: .4s;
      }
    img {
        filter: ${props => props.theme.logoImg};
        transition: .4s;
    }
`;