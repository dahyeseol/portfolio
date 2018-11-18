import React, { Component } from 'react';
import Thumbnail from './Thumbnail';
import projects from '../../constants/projects'

const { langnet, voiceOrderingApp, dibiup, morecoin, pingo } = projects

class Contents extends Component {
  static defaultProps = {
    projects: [
      langnet,
      voiceOrderingApp,
      dibiup,
      morecoin,
      pingo
    ]
  }
  
  render() {
    console.log('this.state', this.state)
    return (
        <ul className="prjList">
          {this.props.projects.map(p => <Thumbnail title={p.title} path={p.path}/>)}
        </ul>
        )

  }
}

export default Contents;