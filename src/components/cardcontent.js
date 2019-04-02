import React from 'react';
import { Card, CardBody, CardHeader, CardFooter, Button, Col, Row, Input, Label } from 'reactstrap';

const CardContent = (props) => {
  return (
    <div id='Venda'>
      <Card>
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
                  <Input type='datetime' id='dtTime' disabled value='01/04/2019 19:53'></Input>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <Label for='funcname' style={{ marginLeft: 'auto' }}>Funcionário</Label>
                </Col>
                <Col sm={8}>
                  <Input type='text' id='funcname' placeholder='Nome do funcionário vai aki' disabled></Input>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>

        </CardBody>
        <CardFooter style={{ justifyContent: 'space-between', display: 'flex' }}>
          <Button color='primary'>Confirmar</Button>
          <Button outline color='danger'>Cancelar</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardContent;
