import React from 'react';
import styled from 'styled-components'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import t from 'prop-types'

export default function Menudrop ({ title, options }) {
  return (
    <Dropdown nav>
      <DropToggle nav caret>
        {title}
      </DropToggle>
      <DropMenu>
        {options.map(item =>
          <DropItem key={item}>{item}</DropItem>
        )}
        <DropItem divider />
        <DropItem>Funcionário</DropItem>
      </DropMenu>
    </Dropdown>
  );
}

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
  color: #ec8433!important;
  &:hover {
    color: #00374b!important;
    background-color: #ec8433!important;
  }
  &:first-child::active {
    background-color: #ec8433!important;
    color: #00374b!important;
  }
`

const DropMenu = styled(DropdownMenu)`
  color: #ec8433!important;
  background-color: #00374b!important;
  border-color: #ec8433!important;
`

const DropItem = styled(DropdownItem)`
  color: #ec8433!important;
  &:hover {
    color: #00374b!important;
    background-color: #ffcca5!important;
  }
`

Menudrop.propTypes = {
  title: t.string.isRequired,
  options: t.array.isRequired
}
