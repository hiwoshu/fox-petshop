import React from 'react'
import { Col, Row, Label } from 'reactstrap'
import MinputDis from 'components/utils/minputdis'

const Funcname = () => (
  <Row>
    <Col style={{ display: 'flex', alignItems: 'flex-end' }}>
      <Label for="funcname" style={{ marginLeft: 'auto' }}>
        Funcionário
      </Label>
    </Col>
    <Col sm={8}>
      <MinputDis
        type="text"
        id="funcname"
        value="Nome do funcionário vai aki"
        disabled
      />
    </Col>
  </Row>
)

export default Funcname
