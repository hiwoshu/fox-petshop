import React from 'react'
import { Col, Row, Label } from 'reactstrap'
import Minput from 'components/utils/minput'

const ListItemsHeader = () => (
  <Row>
    <Col sm={1}>
      <Label
        for="searchItens"
        style={{
          position: 'relative',
          top: '.375rem',
          left: '.9375rem'
        }}
      >
        Itens
      </Label>
    </Col>
    <Col>
      <Minput
        type="search"
        name="searchItens"
        id="searchItens"
        placeholder="Buscar itens..."
      />
    </Col>
  </Row>
)

export default ListItemsHeader
