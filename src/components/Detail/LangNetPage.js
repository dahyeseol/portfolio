import React, { Component } from 'react';
import TopMain from './TopMain';

class LangNetPage extends Component {
  render() {
    const { title, detailId } = this.props
    return (
      <div>
        <TopMain/>
        this is LangNet Page!💬
      </div>
    )
  }
}

export default LangNetPage;
