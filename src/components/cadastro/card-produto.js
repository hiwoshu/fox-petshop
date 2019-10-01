import React from 'react'
import { Col, Row } from 'reactstrap'
import MainCard from 'components/main-card'

const ProdutoHeader = () => (
  <Row>
    <Col sm={4}><h4>Cadastro de Produto</h4></Col>
    <Col></Col>
  </Row>
)

const CardProduto = () => (
  <MainCard id={'Produto'} header={<ProdutoHeader />} />
)

export default CardProduto
