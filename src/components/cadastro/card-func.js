import React from 'react'
import { Col, Row } from 'reactstrap'
import MainCard from 'components/main-card'

const FuncHeader = () => (
  <Row>
    <Col sm={4}><h4>Cadastro de Funcionário</h4></Col>
    <Col></Col>
  </Row>
)

const CardFunc = () => (
  <MainCard id={'Func'} header={<FuncHeader />} />
)

export default CardFunc
