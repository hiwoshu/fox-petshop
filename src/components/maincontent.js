import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import CardVenda from './venda/card-venda'
import {
  CardClient,
  CardForn,
  CardFunc,
  CardProduto,
  CardServico
} from './cadastro'
import CardBusca from './busca/card-busca'
import SecondCustomScrollbar from './utils/secondCustomScrollbar.js'
import { Route, Switch } from 'react-router-dom'
import Home from './home.js'
import Error404 from './error404'

const MainContent = () => (
  <SecondCustomScrollbar>
    <Container>
      <Row>
        <Col>
          <Mdiv>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/venda" exact component={CardVenda} />
              <Route path="/cliente" exact component={CardClient} />
              <Route path="/produto" exact component={CardProduto} />
              <Route path="/servico" exact component={CardServico} />
              <Route path="/fornecedor" exact component={CardForn} />
              <Route path="/funcionario" exact component={CardFunc} />
              <Route path="/buscas" exact component={CardBusca} />
              <Route exact component={Error404} />
            </Switch>
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
