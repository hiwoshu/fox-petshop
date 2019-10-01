import React from 'react'
import { Col, Row } from 'reactstrap'
import MainCard from 'components/main-card'

const ClientHeader = () => (
  <Row>
    <Col sm={4}><h4>Cadastro de Clientes</h4></Col>
    <Col></Col>
  </Row>
)

const CardClient = () => (
  <MainCard id={'Client'} header={<ClientHeader />} />
)

export default CardClient
