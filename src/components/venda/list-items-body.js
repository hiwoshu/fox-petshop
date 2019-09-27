import React, { Component } from 'react'
import { Table } from 'reactstrap'

let LineNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const lineItens2 = {
  Codigo: '0000000000000',
  Nome: 'Nome do produto/serviço vai aki',
  Est: 'estoque',
  Quant: 'Qtd',
  VlUnit: 'R$ vl_unit',
  VlT: 'R$ vl_total',
  x: '✖'
}

export default class ListItemsBody extends Component {
  constructor(props) {
    super(props)

    this.createItems = this.createItems.bind(this)
  }

  createItems(obj) {
    for (let item in obj) {
      return (
        <>
          <td
            style={{ verticalAlign: 'middle', width: '140px' }}
            key={obj.Codigo}
          >
            {obj.Codigo}
          </td>
          <td style={{ verticalAlign: 'middle' }} key={obj.Nome}>
            {obj.Nome}
          </td>
          <td style={{ verticalAlign: 'middle', width: '68px' }} key={obj.Est}>
            {obj.Est}
          </td>
          <td
            style={{ verticalAlign: 'middle', width: '40px' }}
            key={obj.Quant}
          >
            {obj.Quant}
          </td>
          <td
            style={{ verticalAlign: 'middle', width: '90px' }}
            key={obj.VlUnit}
          >
            {obj.VlUnit}
          </td>
          <td style={{ verticalAlign: 'middle', width: '90px' }} key={obj.VlT}>
            {obj.VlT}
          </td>
          <td style={{ verticalAlign: 'middle' }} key={obj.x}>
            {obj.x}
          </td>
        </>
      )
    }
  }

  render() {
    return (
      <Table size="sm" hover bordered>
        <tbody>
          {LineNumbers.map(currentItem => (
            <tr>
              <th
                scope="row"
                style={{
                  verticalAlign: 'middle',
                  width: '30px'
                }}
                key={currentItem}
              >
                {currentItem}
              </th>
              {this.createItems(lineItens2)}
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
}
