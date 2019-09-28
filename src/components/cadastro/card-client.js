import React from 'react'
import { Card, CardBody, CardHeader, CardFooter, Col, Row } from 'reactstrap'
import { OkButton, CancelButton } from 'components/buttons'

const CardClient = () => (
  <Card id="Client" style={{ borderRadius: '0.625rem' }}>
    <CardHeader>
      <Row>
        <Col sm={4}><h4>Cadastro de Clientes</h4></Col>
        <Col></Col>
      </Row>
    </CardHeader>
    <CardBody>

    </CardBody>
    <CardFooter style={{ justifyContent: 'space-between', display: 'flex' }}>
      <OkButton />
      <CancelButton />
    </CardFooter>
  </Card>
)

export default CardClient
