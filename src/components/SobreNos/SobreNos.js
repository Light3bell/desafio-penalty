import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import './SobreNos.sass'

export default class SobreNos extends Component {
    render() {
        return (
            <Row className='align-items-center justify-content-center p-5'>
                <Col md={5}>
                    <h5 className='sobre_nos_title'>Tradição e Modernidade. Há 50 anos, Penalty é Brasil.</h5>
                    <p className='sobre_nos_description'>
                        Ser Penalty é ligar o sonho de ser atleta à realidade. É ter amor pelo esporte. 
                        É dar valor às reuniões de amigos que se unem para praticar lazer, saúde, companheirismo
                        e amizade. É a superação de desafios que rende boas histórias e cria um elo mais forte. 
                        É ter tradição, disciplina, perseverança e coragem. É saber que do suor vem o reconhecimento. 
                        Da garra e do talento, vem o título. É acreditar que o esporte transforma vidas. Para os pequenos
                        é o ohar de esperança de ser atleta da geração ou jogar por pura diversão, hobby, passatempo, por que não?
                    </p>
                </Col>
                <Col md={5}>
                    <h5 className='sobre_nos_title'>Penalty liga com a ecologia, liga todo mundo, liga o melhor do esporte.</h5>
                    <p className='sobre_nos_description'>
                        Aqui o lance é aproximar os fãs do que há de melhor em produtos e experiências. É fornecer
                        para o atleta o material esportivo que ele precisa. Para aquele arremesso. Para aquele drible.
                        Para aquela cesta de 3 pontos. É torcer junto e ter paixão pela disputa. É sacar de longe e acertar em cheio.
                        Na melhor chuteira, na melhor bola de futebol de campo, futsal, society. É estar ligado em tudo porque aqui a gente
                        veste a camisa do Brasil. O ano todo. O verde e amarelo tá no sangue, tá na superação, tá na criatividade. A gente fabrica o manto
                        com o jeito da galera. E muita coisa boa ainda pra rolar. Fica ligado. Ser Penalty é ser Inédito. Revolucionário!
                    </p>
                </Col>
            </Row>
        )
    }
}
