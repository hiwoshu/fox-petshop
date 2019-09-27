import React, { Component } from 'react'
import { Col, Row, Label } from 'reactstrap'
import MinputDis from 'components/utils/minputdis'

export default class DataHora extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: {
        hour: '2-digit',
        minute: '2-digit'
      },
      time: new Date().toLocaleDateString('pt-BR', this.options)
    }

    this.tick = this.tick.bind(this)
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  tick() {
    this.setState({
      time: new Date().toLocaleDateString('pt-BR', this.state.options)
    })
  }

  render() {
    return (
      <Row>
        <Col style={{ display: 'flex', alignItems: 'flex-end' }}>
          <Label for="dtTime" style={{ marginLeft: 'auto' }}>
            Data / Hora
          </Label>
        </Col>
        <Col>
          <MinputDis
            type="datetime"
            id="dtTime"
            disabled
            value={this.state.time}
          />
        </Col>
      </Row>
    )
  }
}
