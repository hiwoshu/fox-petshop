import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import Card from 'components/cardcontent'

const MainContent = () =>(
  <div>
    <Container>
      <Row>
        <Col>
          <Mdiv>
            <Card />
          </Mdiv>
        </Col>
      </Row>
    </Container>
  </div>
)


const Mdiv = styled.div`
  width: 100%;
  position: relative;
  top: 10px;
  bottom: 10px;
`
export default MainContent
