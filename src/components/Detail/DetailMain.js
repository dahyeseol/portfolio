import React, { Component } from 'react';
import LangNetPage from './LangNetPage';
import MorecoinPage from './MorecoinPage';
import DibiupPage from './DibiupPage';
import PingoPage from './PingoPage';
import projects from '../../constants/projects';


const { langnet, voiceOrderingApp, dibiup, morecoin, pingo } = projects
class DetailMain extends Component {
  state = {
  }

  getPage = () => {
    const { projectId } = this.props;
    if (projectId === langnet.id) return <LangNetPage />
    else if (projectId === morecoin.id) return  <MorecoinPage />
    else if (projectId === dibiup.id) return  <DibiupPage />
    else if (projectId === pingo.id) return  <PingoPage />
    else return null;
  }
  
  render() {
    return this.getPage()
  }
}

export default DetailMain;
