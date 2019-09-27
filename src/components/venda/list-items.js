import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import CustomScrollbar from 'components/utils/customScrollbar.js'
import ListItemsHeader from 'components/venda/list-items-header'
import ListItemsBody from 'components/venda/list-items-body'

const ListItems = () => (
  <Row style={{ marginTop: '1.25rem' }}>
    <Col sm={12}>
      <Card style={{ height: '18.75rem' }}>
        <CardHeader>
          <ListItemsHeader />
        </CardHeader>
        <CardBody style={{ padding: 0, height: '7rem', overflow: 'auto' }}>
          <CustomScrollbar style={{ width: 'auto', height: 300 }}>
            <ListItemsBody />
          </CustomScrollbar>
        </CardBody>
      </Card>
    </Col>
  </Row>
)

export default ListItems
