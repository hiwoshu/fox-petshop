import React from 'react'
import { Col, Row } from 'reactstrap'
import DataHora from 'components/venda/date-time'
import Funcname from 'components/venda/funcname'

const NovaVendaHeader = () => (
  <Row>
    <Col sm={2}>
      <h4>Nova Venda</h4>
    </Col>
    <Col>
      <DataHora />
    </Col>
    <Col>
      <Funcname />
    </Col>
  </Row>
)

export default NovaVendaHeader
