import React, { Component } from 'react'
import Thumbnail from './Thumbnail'
import projects from '../../constants/projects'

const { langnet, voiceOrderingApp, dibiup, morecoin, pingo } = projects

class Contents extends Component {
  static defaultProps = {
    projects: [langnet, voiceOrderingApp, dibiup, morecoin, pingo],
  }

  render() {
    const { projects } = this.props
    return (
      <ul className="prjList">
        {projects.map(p => (
          <Thumbnail key={p.id} title={p.title} path={p.path} />
        ))}
      </ul>
    )
  }
}

export default Contents
