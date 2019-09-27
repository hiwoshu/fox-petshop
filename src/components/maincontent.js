import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import CardVenda from 'components/venda/card-venda'
import SecondCustomScrollbar from 'components/utils/secondCustomScrollbar.js'

const MainContent = () => (
  <SecondCustomScrollbar>
    <Container>
      <Row>
        <Col>
          <Mdiv>
            <CardVenda />
          </Mdiv>
        </Col>
      </Row>
    </Container>
  </SecondCustomScrollbar>
)

const Mdiv = styled.div`
  width: 100%;
  position: relative;
  top: 10px;
  bottom: 10px;
`
export default MainContent
