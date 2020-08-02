import React, { Component } from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import './Navbar.sass'

const logo_penalty = require("../../assets/logo_penalty.png").default
const search_icon = require("../../assets/search_icon.png").default
const menu_icon = require("../../assets/menu_icon.png").default

export default class Navbar extends Component {

    openCloseMenu = () => $('.navbar_links').slideToggle()

    render() {
        return (
            <Row className='navbar p-2 pl-5 pr-5 align-items-center justify-content-around'>
                <Col md={3} className='d-flex align-items-center justify-content-center navbar_brand'>
                    <a href='#home'><Image src={logo_penalty} fluid /></a>
                </Col>
                <Col xs={2} className='menu_icon'>
                    <Image src={menu_icon} onClick={this.openCloseMenu} fluid className='menu_icon' />
                </Col>
                <Col md={4} xs={8}>
                    <input className='search_input' placeholder='ENCONTRE SEUS PRODUTOS'/>
                    <a href='#search'><Image src={search_icon} className='search_input_icon' fluid /></a>
                </Col>
                <Col md={4} className='navbar_links'>
                    <Row>
                        <Col className='p-0 text-center' lg={3}>
                            <a href='#bolas' className='navlink navlink-active'>BOLAS</a>
                        </Col>
                        <Col className='p-0 text-center' lg={3}>
                            <a href='#calcados' className='navlink'>CALCADOS</a>
                        </Col>
                        <Col className='p-0 text-center' lg={3}>
                            <a href='#roupas' className='navlink'>ROUPAS</a>
                        </Col>
                        <Col className='p-0 text-center' lg={3}>
                            <a href='#equipamentos' className='navlink'>EQUIPAMENTOS</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}
