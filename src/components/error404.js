import React from 'react'
import styled from 'styled-components'

const Error404 = () => (
  <ErrDiv>
    <H0>Erro 404</H0>
    <HpageText>Página não encontrada</HpageText>
    <PText>A página que você está tentando acessar não existe!</PText>
  </ErrDiv>
)

const ErrDiv = styled.div`
  position: relative;
  top: 8rem;
`

const H0 = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  text-shadow: 0px 5px #00374b;
  -webkit-text-stroke: 3px;
`

const HpageText = styled.h1`
  font-size: 3.4rem;
  font-weight: 900;
  text-shadow: 0px 5px #00374b;
  -webkit-text-stroke: 2px;
`

const PText = styled.p`
  font-size: 1.5rem;
  color: #a3e6ff;
  font-weight: 900;
`

export default Error404
