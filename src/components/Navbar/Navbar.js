import React, { Component } from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import './Navbar.sass'
const navbar_images = {
    logo_penalty: require("../../assets/logo_penalty.png"),
    search_icon: require("../../assets/search_icon.png")
}

export default class Navbar extends Component {
    render() {
        return (
            <Row className='navbar p-2 pl-5 pr-5 align-items-center justify-content-around'>
                <Col sm={3}>
                    <a href='#home'><Image src={navbar_images.logo_penalty} fluid /></a>
                </Col>
                <Col sm={3}>
                    <input className='search_input' placeholder='ENCONTRE SEUS PRODUTOS'/>
                    <a href='#search'><Image src={navbar_images.search_icon} className='search_input_icon' fluid /></a>
                </Col>
                <Col sm={4}>
                    <Row>
                        <Col md={3}>
                            <a href='#bolas' className='navlink navlink-active'>BOLAS</a>
                        </Col>
                        <Col md={3}>
                            <a href='#calcados' className='navlink'>CALCADOS</a>
                        </Col>
                        <Col md={3}>
                            <a href='#roupas' className='navlink'>ROUPAS</a>
                        </Col>
                        <Col md={3}>
                            <a href='#equipamentos' className='navlink'>EQUIPAMENTOS</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}
