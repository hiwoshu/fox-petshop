import React from 'react'
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap'
import NovaVendaHeader from 'components/venda/nova-venda-header'
import VendaTopData from 'components/venda/venda-top-data'
import ListItems from 'components/venda/list-items'
import { OkButton, CancelButton } from 'components/buttons'

const CardVenda = () => (
  <Card id="Venda" style={{ borderRadius: '0.625rem' }}>
    <CardHeader>
      <NovaVendaHeader />
    </CardHeader>
    <CardBody>
      <VendaTopData />
      <ListItems />
    </CardBody>
    <CardFooter style={{ justifyContent: 'space-between', display: 'flex' }}>
      <OkButton />
      <CancelButton />
    </CardFooter>
  </Card>
)

export default CardVenda
