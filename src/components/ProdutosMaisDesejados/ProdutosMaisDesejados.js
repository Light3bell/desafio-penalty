import React, { Component } from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import './ProdutosMaisDesejados.sass'

export default class ProdutosMaisDesejados extends Component {
    render() {
        return (
            <Row>
                <Col md={12} className='pb-1 pt-5 d-flex row align-items-center justify-content-between'>
                    <h3 className='produtos_desejados_title'>PRODUTOS MAIS DESEJADOS</h3>
                    <a href='#vertodos' className='btn_ver_todos'>VER TODOS</a>
                </Col>
            </Row>
        )
    }
}
