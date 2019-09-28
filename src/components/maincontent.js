import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import CardVenda from 'components/venda/card-venda'
import SecondCustomScrollbar from 'components/utils/secondCustomScrollbar.js'
import { Route, Switch } from 'react-router-dom'

const MainContent = () => (
  <SecondCustomScrollbar>
    <Container>
      <Row>
        <Col>
          <Mdiv>
            <Switch>
              <Route path='/venda' exact component={CardVenda} />
              <Route path='/cliente' exact component={Cliente} />
              <Route path='/produto' exact component={Produto} />
              <Route path='/servico' exact component={Servico} />
              <Route path='/fornecedor' exact component={Fornecedor} />
              <Route path='/funcionario' exact component={Funcionario} />
              <Route path='/buscas' exact component={Buscas} />
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

const Cliente = () => (
  <h1>Cadastro de Cliente</h1>
)
const Produto = () => (
  <h1>Cadastro de Produto</h1>
)
const Servico = () => (
  <h1>Cadastro de Serviço</h1>
)
const Fornecedor = () => (
  <h1>Cadastro de Fornecedor</h1>
)
const Funcionario = () => (
  <h1>Cadastro de Funcionário</h1>
)
const Buscas = () => (
  <h1>Buscas</h1>
)
export default MainContent
