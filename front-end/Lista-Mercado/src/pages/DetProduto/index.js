import React, {useEffect, useState} from "react";
import api from '../../services/api'
import { useParams,useHistory } from "react-router-dom";
import './styles.css'
import {Card, message, Button, Modal} from "antd";
import {ExclamationCircleOutlined, EditOutlined} from '@ant-design/icons';


export default function DetalhesProduto(){
    const [produto, setProduto] = useState([])
    const history = useHistory()
    let {id} = useParams();

    const {confirm} = Modal;
    function showConfirm(produto) {
        confirm({
            title: 'Tem certeza que deseja excluir este produto?',
            icon: <ExclamationCircleOutlined/>,
            content:produto.name,
            onOk(){
                handleDelete(produto.id)
            },
        });
    }

    function handleDelete(id){
        api.delete(`/item/${id}`)
        .then((response) =>{
            if(response.status === 200){
            message.success("Produto excluido com sucesso")
            history.push('/produtos')
            }
        })
        .catch((err) =>{
            message.error("Ocorreu um erro inesperado")
        })
    }

    useEffect(() => {
        api.get(`/item/${id}`)
        .then((response) => {
            setProduto(response.data)
        })
        .catch((err) => {
            message.error("Aconteceu um erro inesperado")
        })
    }, [id])

    return(
        <div className="produto_container">
            <h1>Detalhes do produto</h1>
            <br/>
            <div className="produto_card_container_det">
                <Card key={produto.id} title={produto.name} style={{border: "3px solid rgba(217, 216, 216, 0.902)"}}>
                    <p>Id: {produto.id}</p>
                    <p>UpdatedAt: {produto.updatedAt}</p>
                    <p>Descrição: {produto.description}</p>
                    <p>Quantidade: {produto.quantity}</p>
                    <hr/>
                    <div className="produto_card_actions">
                        <Button type="primary" danger onClick={()=> showConfirm(produto)}>Excluir</Button>
                        <Button type="primary" success icon={<EditOutlined />} onClick={()=> history.push(`/editar/${produto.id}`, produto)}>Editar</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}