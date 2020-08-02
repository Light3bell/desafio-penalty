import React, { Component } from 'react'
import {Row, Col, Spinner} from 'react-bootstrap'
import Produto from './Produto'
import './ProdutosMaisDesejados.sass'

export default class ProdutosMaisDesejados extends Component {

    state = {
        products: [],
        isLoading: true,
    }

    componentDidMount(){
        this.getProducts()
    }

    getProducts = async () => {
        const response = await fetch(`http://5df79cce4fdcb20014a48286.mockapi.io/api/v1/getProducts`)
        const result   = await response.json()
        this.setState({products: result, isLoading: false})
    }

    render() {
        const renderProducts = this.state.products.map((product) => {
            return <Produto product={product} key={product.productId} />
        })

        return (
            <Row>
                <Col md={12} className='pb-1 pt-5 d-flex align-items-center justify-content-between'>
                    <h3 className='products_title'>PRODUTOS MAIS DESEJADOS</h3>
                    <a href='#vertodos' className='btn_show_all'>VER TODOS</a>
                </Col>
                <Col md={12} className='p-0 m-0 justify-content-center d-flex row'>
                    {this.state.isLoading ?
                        <Spinner animation="border" className='mt-5' />
                    :
                        renderProducts
                    }
                </Col>
            </Row>
        )
    }
}
