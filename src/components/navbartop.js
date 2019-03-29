import React from 'react';
import styled from 'styled-components'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container } from 'reactstrap';

export default class NavbarTop extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Topbar expand="md">
          <Container>
            <Logobar href="#">Fox PetShop</Logobar>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <Linkbar href="#">Sair</Linkbar>
              </NavItem>
            </Nav>
          </Container>
        </Topbar>
      </div>
    );
  }
}

const Topbar = styled(Navbar)`
  background-color: #00374b!important;
`

const Logobar = styled(NavbarBrand)`
  color: #ec8433;
  &:hover {
    color: #ec8433;
  }
  &:visited {
    color: #ec8433;
  }
`

const Linkbar = styled(NavLink)`
  color: #ec8433;
  &:hover {
    color: #ec8433;
  }
  &:visited {
    color: #ec8433;
  }
`
