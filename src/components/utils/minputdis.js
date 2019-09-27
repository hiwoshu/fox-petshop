import React from 'react'
import styled from 'styled-components'

const MinputDis = ({ ...props }) => {
  return (
    <MinputDisabled {...props}  disabled/>
  )
}

const MinputDisabled = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 0.125rem);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #ec8433;
  background-color: #e9ecef;
  background-clip: padding-box;
  border: 0.0625rem solid #e6e6e6;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #ec8433;
    box-shadow: 0 0 0 0.125rem rgba(236, 132, 51, 1);
    color: #ec8433;
    outline: none;
  }
`

export default MinputDis
