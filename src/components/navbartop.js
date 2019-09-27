import React from 'react'
import styled from 'styled-components'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap'
import Dropdown from 'components/menudrop.js'
import Logo from 'img/logo.png'

export default class NavbarTop extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const list1 = ['Cliente', 'Produto', 'Serviço', 'Fornecedor']

    return (
      <Topbar expand="md">
        <Container>
          <Logobar href="#">
            <img
              src={Logo}
              width="50px"
              height="50px"
              alt="logo"
              style={{ margin: 0, padding: 0, marginRight: '10px' }}
            />
            Fox PetShop
          </Logobar>
          <Nav pills>
            <NavItem>
              <Linkbar href="#">Venda</Linkbar>
            </NavItem>
            <Dropdown title="Cadastros" options={list1} />
            <NavItem>
              <Linkbar href="#">Buscas</Linkbar>
            </NavItem>
          </Nav>

          <Nav className="ml-auto" navbar pills>
            <NavItem>
              <Linkbar href="#">Sair</Linkbar>
            </NavItem>
          </Nav>
        </Container>
      </Topbar>
    )
  }
}

const Topbar = styled(Navbar)`
  background-color: #00374b !important;
  padding: 0 1rem !important;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
`

const Logobar = styled(NavbarBrand)`
  color: #ec8433;
  padding: 0 !important;
  &:hover {
    color: #ec8433;
  }
  &:visited {
    color: #ec8433;
  }
`

const Linkbar = styled(NavLink)`
  color: #ec8433;
  text-transform: uppercase;
  &:hover {
    color: #00374b;
    background-color: #ec8433;
  }
  &:active {
    color: #00374b;
    background-color: #ec8433;
  }
`
