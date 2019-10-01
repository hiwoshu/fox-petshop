import React from 'react'
import { Col, Row } from 'reactstrap'
import MainCard from 'components/main-card'

const FornHeader = () => (
  <Row>
    <Col sm={4}><h4>Cadastro de Fornecedor</h4></Col>
    <Col></Col>
  </Row>
)

const CardForn = () => (
  <MainCard id={'Forn'} header={<FornHeader />} />
)

export default CardForn
