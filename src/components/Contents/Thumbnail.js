import React, { Component } from 'react';

class Thumbnail extends Component {
  state = {
  }

  render() {
    const { title, path } = this.props
    return (
      <a className={title} href={path}>
        <div className="Prj">
          <p>{title}</p>
        </div>
      </a>)
  }
}

export default Thumbnail;