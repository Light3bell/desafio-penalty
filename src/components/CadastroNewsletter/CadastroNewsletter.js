import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import './CadastroNewsletter.sass'

export default class CadastroNewsletter extends Component {

    state = {nome: '', email: ''}

    registerEmail = () => {
        let {nome, email} = this.state
        if(nome.trim() == '' || email.trim() == ''){
            alert('Preencha todos os campos!')
        }else if(!this.validateEmail(email)){
            alert('E-mail inválido!')
        }else{
            alert('Cadastro feito com sucesso!')
            this.setState({nome: '', email: ''})
        }
    }

    validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    render() {
        return (
            <Row className='align-items-center justify-content-center p-3 mt-5' style={{background: '#009b4f'}}>
                <Col sm={3} className='newsletter_title'>
                    RECEBER NOVIDADES DA PENALTY
                </Col>
                <Col sm={2}>
                    <input value={this.state.nome} onChange={(event) => this.setState({nome: event.target.value})} className='newsletter_input' placeholder='NOME' type='text'/>
                </Col>
                <Col sm={2}>
                    <input value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} className='newsletter_input' placeholder='E-MAIL' type='email'/>
                </Col>
                <Col sm={2}>
                    <button className='btn_newsletter' onClick={this.registerEmail}>CADASTRAR</button>
                </Col>
            </Row>
        )
    }
}
