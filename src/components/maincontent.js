import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import CardVenda from 'components/venda/card-venda'
import CardClient from 'components/cadastro/card-client'
import CardForn from 'components/cadastro/card-forn'
import CardFunc from 'components/cadastro/card-func'
import CardProduto from 'components/cadastro/card-produto'
import CardServico from 'components/cadastro/card-servico'
import CardBusca from 'components/busca/card-busca'
import SecondCustomScrollbar from 'components/utils/secondCustomScrollbar.js'
import { Route, Switch } from 'react-router-dom'
import Home from 'components/home.js'

const MainContent = () => (
  <SecondCustomScrollbar>
    <Container>
      <Row>
        <Col>
          <Mdiv>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/venda' exact component={CardVenda} />
              <Route path='/cliente' exact component={CardClient} />
              <Route path='/produto' exact component={CardProduto} />
              <Route path='/servico' exact component={CardServico} />
              <Route path='/fornecedor' exact component={CardForn} />
              <Route path='/funcionario' exact component={CardFunc} />
              <Route path='/buscas' exact component={CardBusca} />
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
