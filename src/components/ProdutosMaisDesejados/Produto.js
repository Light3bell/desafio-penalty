import React, { Component } from 'react'
import {Col, Image} from 'react-bootstrap'
import "./Produto.sass"

export default class Produto extends Component {
    render() {
        const {productName, description, productImageUrl, installments} = this.props.product
        const {priceWithoutDiscount, listPrice} = installments[0]
        const plots_value = listPrice / 6

        return (
            <Col md={2} className='product_card mt-3'>
                <div className='product_header d-flex justify-content-center align-items-center' style={{overflow: 'hidden'}}>
                    <Image style={{maxWidth: '70%', height: 'auto'}} src={productImageUrl} />
                </div>
                <div className='product_body'>
                    <h5 className='product_title'>{productName}</h5>
                    <p className='product_description'>{description.slice(0, 90)}...</p>
                    <p className='mb-0'>
                        <span className='price'>R$ {priceWithoutDiscount.replace('.', ',')}</span>
                        <span className='discount_price'>R$ {listPrice.replace('.', ',')}</span>
                    </p>
                    <p className='plots'>ou <b>6x</b> de <b>R$ {plots_value.toFixed(2).replace('.', ',')}</b> sem juros</p>
                </div>
            </Col>
        )
    }
}
