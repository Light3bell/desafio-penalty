import React, { Component } from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import './Rodape.sass'

const logo_penalty = require("../../assets/logo_penalty_black.png").default

export default class Rodape extends Component {
    render() {
        return (
            <Row className='p-3 align-items-center justify-content-center pl-5 pr-5' style={{background: '#e1e1e1'}}>
                <Col sm={8} className='rodape_info'>
                    Copyright Penalty 2020 www.penalty.com.br - TODOS OS DIREITOS RESERVADOS, CNPJ 61.088ção.894/0008-84,
                    Av. Getúlio Vargas, 930, 18130-430. São Roque - SP. É vetada a reprodução total ou parcial das informações
                    aqui veiculadas sem a expressa autorização da administração do site. Os preços e condições de pagamentos 
                    são válidos exclusivamente para compras realizadas via internet e poderão sofrer alteração sem aviso prévio.
                    Em caso de divergência, o preço válido é sempre o do carrinho de compras.
                </Col>
                <Col sm={2} className='d-flex align-items-center justify-content-center'>
                    <Image fluid src={logo_penalty} className='rodape_penalty_logo' />
                </Col>
            </Row>
        )
    }
}
