import React, { Component } from 'react';

class TopMain extends Component {
  state = {
  }

  render() {
    const { title } = this.props
    return (
      <div className = "topBox">
        <div className= {title} >
          <div className = "wrapper">
            <div className = "textBox">
              <h1>{title}</h1>
              <p>Role</p>
              <p>Duration</p>
              <div>{this.props.role}</div>
              <div>{this.props.duration}</div>
            </div>  
          </div>
        </div>
      </div>
    )
  }
}

export default TopMain;