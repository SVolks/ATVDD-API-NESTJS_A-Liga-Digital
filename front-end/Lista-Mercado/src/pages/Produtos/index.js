import React, {useEffect, useState} from "react";
import api from '../../services/api';
import { useHistory } from "react-router-dom";

import './styles.css'
import { Button, Card, message } from 'antd';

export default function Produtos(){
    const[produtos, setProdutos] = useState([])
    const history = useHistory()

    useEffect(() => {
        api.get('/item')
        .then((response) => {
            setProdutos(response.data)
        })
        .catch((err) => {
            message.error("Aconteceu um erro inesperado " + err)
        })
    }, [])

    let check = document.querySelectorAll('input[type="checkbox"]');
                for(let i of check){
                i.onclick = function(){            
                    let pai = this.closest(".card");
                    if(this.checked){
                        pai.style.opacity = "0.9";
                        pai.style.background = "#f7f7f7";
                    }else{
                        pai.style.opacity = "1";
                        pai.style.background = "rgba(255, 254, 254, 0.949)";
                     }                                
                }
                }

    return(

        <div className="produto_container">
            <h1>Lista de compras</h1>

            <div className="produto_card_container">
                {produtos.map(produto => (
                    <Card className="card" key={produto.id} title={produto.name} bordered={false} style={{width: 186, height: 280, border: "3px solid rgba(217, 216, 216, 0.902)"}}>
                        <input type="checkbox" className="checkbox"></input>
                        <p>Descrição: {produto.description}</p>
                        <p>Quantidade: {produto.quantity}</p>
                        <Button className="btn" onClick={() => history.push(`/detalhes/${produto.id}`)}>Detalhes</Button>
                    </Card>
                ))}
            </div>
        </div>
    )
}