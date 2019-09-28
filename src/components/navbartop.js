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
import Logo from 'img/logo.png'
import { NavLink as Link } from 'react-router-dom'
import Menudrop from 'components/menudrop'

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
    return (
      <Topbar expand="md">
        <Container>
          <Logobar tag={Link} to="/">
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
            <NavItem><Linkbar tag={Link} to="/venda">Venda</Linkbar></NavItem>
            <Menudrop />
            <NavItem><Linkbar tag={Link} to="/buscas">Buscas</Linkbar></NavItem>
          </Nav>

          <Nav className="ml-auto" navbar pills>
            <NavItem><Linkbar tag={Link} to="/login">Sair</Linkbar></NavItem>
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
    color: #ec8433;
    text-decoration: none !important;
  }
  &:active {
    color: #00374b;
    background-color: #ec8433;
  }
`
