import React, { Component } from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import './Destaques.sass'

const destaque01 = require('../../assets/banner_site_penalty_05.png').default

export default class Destaques extends Component {
    render() {
        return (
            <Row className='destaques_container'>
                <Col md={12}>
                    <h3 className='destaque_title pb-1 pt-3'>EM DESTAQUE</h3>
                </Col>
                <Col md={4}>
                    <Image fluid style={{width: '100%'}} src={destaque01} />
                </Col>
                <Col md={4}>
                    <Image fluid style={{width: '100%'}} src={destaque01} />
                </Col>
                <Col md={4}>
                    <Image fluid style={{width: '100%'}} src={destaque01} />
                </Col>
            </Row>
        )
    }
}
