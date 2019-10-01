import React from 'react'
import styled from 'styled-components'
import { Card } from 'reactstrap'
import HomeBack from 'img/homebk4.png'

const Home = () => (
  <HomeCard id="Home" style={{ borderRadius: '0.625rem' }}>
    <img src={HomeBack} width='770px' height='308px' alt='provisory home' style={{ margin: 0, padding: 0 }} />
  </HomeCard>
)

const HomeCard = styled(Card)`
  background-color: transparent !important;
  border: none !important;
  align-items: center;
  justify-content: flex-end;
  height: 558px;
`

export default Home
