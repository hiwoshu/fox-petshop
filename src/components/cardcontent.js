import React, { Component } from 'react';
import styled from 'styled-components'
import { Card, CardBody, CardHeader, CardFooter, Button, Col, Row, Label } from 'reactstrap';

class CardContent extends Component {
  constructor(props) {
    super(props)

    this.dataHora = this.dataHora.bind(this);
  }

  dataHora() {
    const data = new Date();

    const options = {
      hour: '2-digit',
      minute: '2-digit'
    }

    return data.toLocaleDateString('pt-BR', options);
  }

  render() {
    return (
      <div>
        <div id='Venda'>
          <Card style={{ borderRadius: '0.625rem' }}>
            <CardHeader>
              <Row>
                <Col sm={2}>
                  <h4>Nova Venda</h4>
                </Col>
                <Col>
                  <Row>
                    <Col style={{ display: 'flex', alignItems: 'flex-end' }}>
                      <Label for='dtTime' style={{ marginLeft: 'auto' }}>Data / Hora</Label>
                    </Col>
                    <Col>
                      <MinputDis type='datetime' id='dtTime' disabled value={this.dataHora()} />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col style={{ display: 'flex', alignItems: 'flex-end' }}>
                      <Label for='funcname' style={{ marginLeft: 'auto' }}>Funcionário</Label>
                    </Col>
                    <Col sm={8}>
                      <MinputDis type='text' id='funcname' value='Nome do funcionário vai aki' disabled />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Row>
                <Col sm={7}>
                  <Row form={true}>
                    <TextLabel>Cliente</TextLabel>
                    <Minput type='search' id='vdClient' />
                  </Row>
                  <Row form={true}>
                    <TextLabel>Pet</TextLabel>
                    <Minput type='search' id='vdPet' />
                  </Row>
                </Col>
                <Col sm={5} style={{ display: 'flex', alignItems: 'center' }}>
                  <h5 style={{ fontWeight: '900', 'WebkitTextStroke': 'thin #ec8433' }}>Valor Total</h5>
                  {/*<MinputDis type='text' id='value'disabled value='R$ 9999,99' style={{ height: '100%' }}></MinputDis>*/}
                  <TotalPlace>
                    <PriceText><span>R$</span> 9999,99</PriceText>
                  </TotalPlace>
                </Col>
              </Row>
            </CardBody>
            <CardFooter style={{ justifyContent: 'space-between', display: 'flex' }}>
              <Button color='primary'>Confirmar</Button>
              <Button outline color='danger'>Cancelar</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }
}

const MinputDis = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #ec8433;
  background-color: #e9ecef;
  background-clip: padding-box;
  border: 1px solid #e6e6e6;
  border-radius: .25rem;
  transition: border-color .15s
    ease-in-out,box-shadow .15s
    ease-in-out;

  &:focus {
    border-color: #ec8433;
    box-shadow: 0 0 0 0.125rem rgba(236, 132, 51, 1);
    color: #ec8433;
    outline: none;
  }
`

const Minput = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #ec8433;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #e6e6e6;
  border-radius: .25rem;
  transition: border-color .15s
    ease-in-out,box-shadow .15s
    ease-in-out;

  &:focus {
    border-color: #ec8433;
    box-shadow: 0 0 0 0.125rem rgba(236, 132, 51, 1);
    color: #ec8433;
    outline: none;
  }
`

const TextLabel = styled(Label)`
  font-size: 12px;
  margin-bottom: 0;
  margin-left: 10px;
`

const TotalPlace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #ec8433;
  background-color: #e9ecef;
  background-clip: padding-box;
  border: 1px solid #e6e6e6;
  border-radius: .25rem;
  transition: border-color .15s
    ease-in-out,box-shadow .15s
    ease-in-out;

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
  text-align: center;
  text-align-last: justify;
  -webkit-text-stroke: #ec8433;
  -webkit-text-stroke-width: thin;

  span {
    font-size: 2rem;
    position: relative;
    top: -10px;
  }
`


export default CardContent;
