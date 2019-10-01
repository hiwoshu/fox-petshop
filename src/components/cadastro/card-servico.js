import React from 'react'
import { Col, Row } from 'reactstrap'
import MainCard from 'components/main-card'

const ServicoHeader = () => (
  <Row>
    <Col sm={4}><h4>Cadastro de Serviço</h4></Col>
    <Col></Col>
  </Row>
)

const CardServico = () => (
  <MainCard id={'Servico'} header={<ServicoHeader />} />
)

export default CardServico
