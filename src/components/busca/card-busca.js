import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import NavBusca from './nav-busca'

const CardBusca = () => (
  <Card id="Busca" style={{ borderRadius: '0.625rem' }}>
    <CardHeader style={{ padding: '0' }}>
      <NavBusca />
    </CardHeader>
    <CardBody></CardBody>
  </Card>
)

export default CardBusca
