import React from 'react'
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap'
import { OkButton, CancelButton } from 'components/buttons'

const MainCard = ({ id, header, body = null }) => (
  <Card id={id} style={{ borderRadius: '0.625rem' }}>
    <CardHeader>
      {header}
    </CardHeader>
    <CardBody>
      {body}
    </CardBody>
    <CardFooter style={{ justifyContent: 'space-between', display: 'flex' }}>
      <OkButton />
      <CancelButton />
    </CardFooter>
  </Card>
)

export default MainCard
