import React, { Component } from 'react';
import './App.css';
import Main from './Main/Main';
import Contents from './Contents/Contents';
import DetailMain from './Detail/DetailMain';
import { Router, Link } from "@reach/router"


const Home = () => (
  <div className="wrapper">
    <Main />
    <Contents />
  </div>
)
class App extends Component {
  state = {
    view: 'normal', // 'detail'
  }

  renderLogo = () => {
    return this.state.view === 'detail' &&
      <a onClick={() => this.setState({ view: 'normal' })}>
        Dahye Seol
    </a>
  }

  render() {
    console.log(this.filterActivated)
    return (
        <Router>
          <Home path="/" default/>
          <DetailMain path="/projects/:projectId" />
        </Router>
    );
  }
}


export default App;
