import React, { Component } from 'react'
import {
  Button,
  ButtonGroup,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import Minput from 'components/utils/minput'
import classnames from 'classnames'
import styled from 'styled-components'

export default class NavBusca extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 'Cliente',
      rSelected: 1
    }

    this.toggle = this.toggle.bind(this)
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this)
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected })
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <Nav tabs style={{ justifyContent: 'space-between' }}>
          <NavItem>
            <Link
              className={classnames({
                active: this.state.activeTab === 'Cliente'
              })}
              onClick={() => {
                this.toggle('Cliente')
              }}
            >
              <Htext>Cliente</Htext>
            </Link>
          </NavItem>
          <NavItem>
            <Link
              className={classnames({
                active: this.state.activeTab === 'Produto'
              })}
              onClick={() => {
                this.toggle('Produto')
              }}
            >
              <Htext>Produto</Htext>
            </Link>
          </NavItem>
          <NavItem>
            <Link
              className={classnames({
                active: this.state.activeTab === 'Serviço'
              })}
              onClick={() => {
                this.toggle('Serviço')
              }}
            >
              <Htext>Serviço</Htext>
            </Link>
          </NavItem>
          <NavItem>
            <Link
              className={classnames({
                active: this.state.activeTab === 'Venda'
              })}
              onClick={() => {
                this.toggle('Venda')
              }}
            >
              <Htext>Venda</Htext>
            </Link>
          </NavItem>
          <NavItem>
            <Link
              className={classnames({
                active: this.state.activeTab === 'Fornecedor'
              })}
              onClick={() => {
                this.toggle('Fornecedor')
              }}
            >
              <Htext>Fornecedor</Htext>
            </Link>
          </NavItem>
          <NavItem>
            <Link
              className={classnames({
                active: this.state.activeTab === 'Funcionário'
              })}
              onClick={() => {
                this.toggle('Funcionário')
              }}
            >
              <Htext>Funcionário</Htext>
            </Link>
          </NavItem>
        </Nav>
        <TabContent
          activeTab={this.state.activeTab}
          style={{ padding: '.75rem 1.25rem', backgroundColor: '#f5f5f7' }}
        >
          <TabPane tabId="Cliente">
            <ButtonGroup style={{ margin: '0 0 20px 0' }}>
              <Button
                color="primary"
                onClick={() => this.onRadioBtnClick(1)}
                active={this.state.rSelected === 1}
              >
                Tudo
              </Button>
              <Button
                color="primary"
                onClick={() => this.onRadioBtnClick(2)}
                active={this.state.rSelected === 2}
              >
                Nome
              </Button>
              <Button
                color="primary"
                onClick={() => this.onRadioBtnClick(3)}
                active={this.state.rSelected === 3}
              >
                Cidade
              </Button>
              <Button
                color="primary"
                onClick={() => this.onRadioBtnClick(4)}
                active={this.state.rSelected === 4}
              >
                Estado
              </Button>
              <Button
                color="primary"
                onClick={() => this.onRadioBtnClick(5)}
                active={this.state.rSelected === 5}
              >
                Pet
              </Button>
            </ButtonGroup>
            <Minput
              type="search"
              name="searchClients"
              id="searchClients"
              placeholder="Buscar clientes..."
            />
          </TabPane>
          <TabPane tabId="Produto">
            <Minput
              type="search"
              name="searchProdutos"
              id="searchProdutos"
              placeholder="Buscar produtos..."
            />
          </TabPane>
          <TabPane tabId="Serviço">
            <Minput
              type="search"
              name="searchServico"
              id="searchServico"
              placeholder="Buscar serviços..."
            />
          </TabPane>
          <TabPane tabId="Venda">
            <Minput
              type="search"
              name="searchVendas"
              id="searchVendas"
              placeholder="Buscar vendas..."
            />
          </TabPane>
          <TabPane tabId="Fornecedor">
            <Minput
              type="search"
              name="searchForn"
              id="searchForn"
              placeholder="Buscar fornecedores..."
            />
          </TabPane>
          <TabPane tabId="Funcionário">
            <Minput
              type="search"
              name="searchFunc"
              id="searchFunc"
              placeholder="Buscar funcionários..."
            />
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

const Link = styled(NavLink).attrs()`
  width: 11.54rem;
  border-top-left-radius: 0.625rem !important;
  border-top-right-radius: 0.625rem !important;
  cursor: pointer;
`

const Htext = styled.h4`
  text-align: center;
  margin-bottom: 0;
`
