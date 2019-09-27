import React from 'react'
import styled from 'styled-components'

const BotaoPadrao = ({ ...props }) => (
  <Botao style={{ outline: 'none' }}>
    {props}
  </Botao>
)

export const OkButton = () => (
  <PrimaryButton style={{ outline: 'none' }}>OK</PrimaryButton>
)

export const CancelButton = () => (
  <DangerButton style={{ outline: 'none' }}>&#10006; Cancelar</DangerButton>
)

const Botao = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 0.0625rem solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
`

const PrimaryButton = styled(Botao)`
  width: 7rem;
  color: #fff;
  background-color: #1398c9;
  border-color: #1398c9;
  box-shadow: 0 0.1875rem 0 0 #00374b;

  &:active {
    position: relative;
    top: 0.1875rem;
    color: #fff;
    background-color: #1398c9;
    border-color: #1398c9;
    box-shadow: none;
  }
`

const DangerButton = styled(Botao)`
  width: 7rem;
  font-weight: 900;
  color: #ec8433;
  background-color: #fff;
  background-image: none;
  border-color: #ec8433;
  box-shadow: 0 0.1875rem 0 0 #ec8433;

  &:active {
    position: relative;
    top: 0.1875rem;
    color: #ec8433;
    background-color: #fff;
    border-color: #ec8433;
    box-shadow: none;
  }
`

export default BotaoPadrao
