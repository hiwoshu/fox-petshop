import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

class SecondCustomScrollbar extends Component {
  render() {
    return (
      <Scrollbars
        className="full-size"
        renderThumbVertical={({ style, ...props }) => (
          <div
            {...props}
            style={{
              ...style,
              backgroundColor: 'rgba(0, 54, 74, 0.7)',
              borderRadius: '50px',
              right: '.2rem'
            }}
          />
        )}
      >
        {this.props.children}
      </Scrollbars>
    )
  }
}

export default SecondCustomScrollbar
