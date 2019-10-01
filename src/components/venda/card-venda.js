import React from 'react'
import MainVenda from 'components/venda/main-venda'
import NovaVendaHeader from 'components/venda/nova-venda-header'
import MainCard from 'components/main-card'

const CardVenda = () => (
  <MainCard id={'Venda'} header={<NovaVendaHeader />} body={<MainVenda />} />
)

export default CardVenda
