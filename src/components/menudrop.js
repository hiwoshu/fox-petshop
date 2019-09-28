import React from 'react'
import styled from 'styled-components'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import { NavLink as Link } from 'react-router-dom'

const Menudrop = () => (
  <Dropdown nav>
    <DropToggle nav caret>Cadastros</DropToggle>
    <DropMenu>
      <DropItem><LinkNav to="/cliente" children="Cliente" /></DropItem>
      <DropItem><LinkNav to="/produto" children="Produto" /></DropItem>
      <DropItem><LinkNav to="/servico" children="Serviço" /></DropItem>
      <DropItem><LinkNav to="/fornecedor" children="Fornecedor" /></DropItem>
      <DropItem divider />
      <DropItem><LinkNav to="/funcionario" children="Funcionário" /></DropItem>
    </DropMenu>
  </Dropdown>
)

const Dropdown = styled(UncontrolledDropdown)`
  color: #ec8433;
  text-transform: uppercase;
  &:hover {
    color: #ec8433;
  }
  &:visited {
    color: #ec8433;
  }
`

const DropToggle = styled(DropdownToggle)`
  color: #ec8433 !important;
  &:hover {
    color: #00374b !important;
    background-color: #ec8433 !important;
  }
`

const DropMenu = styled(DropdownMenu)`
  color: #ec8433 !important;
  background-color: #00374b !important;
  border-color: #ec8433 !important;
  margin-top: 0.3rem !important;
`

const DropItem = styled(DropdownItem)`
  color: #ec8433 !important;
  &:hover {
    color: #00374b !important;
    background-color: #ffcca5 !important;
    outline: none !important;
  }
`

const LinkNav = styled(Link)`
  color: #ec8433;
  text-transform: uppercase;
  &:hover {
    color: #ec8433;
    text-decoration: none;
  }
  &:active {
    color: #00374b;
    background-color: #ffcca5;
  }
`

export default Menudrop
