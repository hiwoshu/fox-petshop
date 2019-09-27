import React from 'react'
import styled from 'styled-components'
import { Col, Row, Label } from 'reactstrap'
import Minput from 'components/utils/minput'

const VendaTopData = () => (
  <Row>
    <Col sm={8}>
      <Row>
        <Col sm={1}>
          <TextLabel for="vdClient">Cliente</TextLabel>
        </Col>
        <Col>
          <Minput
            type="search"
            name="vdClient"
            id="vdClient"
            style={{ marginBottom: '20px' }}
            placeholder="Buscar cliente..."
          />
        </Col>
      </Row>
      <Row>
        <Col sm={1}>
          <TextLabel for="vdPet">Pet</TextLabel>
        </Col>
        <Col>
          <Minput
            type="search"
            name="vdPet"
            id="vdPet"
            placeholder="Buscar pet..."
          />
        </Col>
      </Row>
    </Col>
    <Col sm={4} style={{ display: 'flex', alignItems: 'center' }}>
      <h5
        style={{
          fontWeight: '900',
          WebkitTextStroke: 'thin #ec8433',
          position: 'relative'
        }}
      >
        Valor Total
      </h5>
      <TotalPlace>
        <PriceText>
          <span>R$</span> 9999,99
        </PriceText>
      </TotalPlace>
    </Col>
  </Row>
)

const TextLabel = styled(Label)`
  margin-top: 0.3rem;
  margin-bottom: 0;
`

const TotalPlace = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  width: 100%;
  height: 6.25rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #ec8433;
  background-color: #e9ecef;
  background-clip: padding-box;
  border: 0.0625rem solid #e6e6e6;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #ec8433;
    box-shadow: 0 0 0 0.125rem rgba(236, 132, 51, 1);
    color: #ec8433;
    outline: none;
  }
`

const PriceText = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 0;
  text-align: center;
  text-align-last: justify;
  -webkit-text-stroke: #ec8433;
  -webkit-text-stroke-width: thin;

  span {
    font-size: 1.5rem;
    position: relative;
    top: -0.9rem;
  }
`

export default VendaTopData
