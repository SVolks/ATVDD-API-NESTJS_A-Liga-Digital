import React, {useEffect, useState} from "react";
import api from '../../services/api';
import { useHistory } from "react-router-dom";

import './styles.css'
import { Button, Card, message, Checkbox } from 'antd';

export default function Produtos(){
    const[produtos, setProdutos] = useState([])
    const history = useHistory()

    useEffect(() => {
        api.get('/item')
        .then((response) => {
            setProdutos(response.data)
        })
        .catch((err) => {
            message.error("Aconteceu um erro inesperado" + err)
        })
    }, [])

    return(

        <div className="produto_container">
            <h1>Lista de compras</h1>

            <div className="produto_card_container">
                {produtos.map(produto => (
                    <Card key={produto.id} title={produto.name} bordered={false} style={{width: 186, height: 280, border: "3px solid rgba(217, 216, 216, 0.902)"}}>
                        <Checkbox className="checkbox" onChange={(onChange) =>
                            function onChange(e) {
                                console.log(`checked = ${e.target.checked}`)
                            }}>
                        </Checkbox>
                        <p>Descrição: {produto.description}</p>
                        <p>Quantidade: {produto.quantity}</p>
                        <Button className="btn" onClick={() => history.push(`/detalhes/${produto.id}`)}>Detalhes</Button>
                    </Card>
                ))}
            </div>
        </div>
    )
}