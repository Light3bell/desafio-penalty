import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import './CadastroNewsletter.sass'

export default class CadastroNewsletter extends Component {

    state = {name: '', email: ''}

    registerEmail = async () => {
        let {name, email} = this.state
        if(name.trim() == '' || email.trim() == ''){
            alert('Preencha todos os campos!')
        }else if(!this.validateEmail(email)){
            alert('E-mail inválido!')
        }else{
            try {
                await fetch(`http://127.0.0.1:3333/cadastroNewsletter?name=${name}&email=${email}`, {mode: 'no-cors'})
                this.setState({name: '', email: ''})
                alert('Cadastro efetuado com sucesso!')
            } catch (error) {
                alert('Erro ao realizar cadastro!')
            }
        }
    }

    validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    render() {
        return (
            <Row className='align-items-center justify-content-center p-3 mt-5 container_newsletter' style={{background: '#009b4f'}}>
                <Col md={3} className='newsletter_title'>
                    RECEBER NOVIDADES DA PENALTY
                </Col>
                <Col md={2}>
                    <input value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} className='newsletter_input' placeholder='NOME' type='text'/>
                </Col>
                <Col md={2}>
                    <input value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} className='newsletter_input' placeholder='E-MAIL' type='email'/>
                </Col>
                <Col md={2}>
                    <button className='btn_newsletter' onClick={this.registerEmail}>CADASTRAR</button>
                </Col>
            </Row>
        )
    }
}
