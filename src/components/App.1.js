import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

const bfs = [
  {
    name: 'Legolas',
    emoji: '🧝‍',
  },
  {
    name: 'James',
    emoji: '👨🏻‍⚕️',
  },
  {
    name: 'Sherlock',
    emoji: '🕵🏻‍',
  },
  {
    name: 'John',
    emoji: '👨🏾‍🚀',
  },
  {
    name: 'Chris',
    emoji: '🤴🏻',
  },
  {
    name: 'David',
    emoji: '🧚‍',
  },
  {
    name: 'Sam',
    emoji: '👨‍🎤',
  },
  {
    name: 'Peter',
    emoji: '🕷',
  } ]
const getRandom = () => new Date().getTime() % bfs.length;

class App extends Component {
  state = {
    view: 'normal', // 'detail'
    rocket: false,
    boyfriendNumber: getRandom(),  // 0~
  }

  renderLogo = () => {
    return this.state.view === 'detail' &&
      <a onClick={() => this.setState({ view: 'normal' })}>
        Dahye Seol
    </a>

  }

  handleOnClickRocketButton = () => {
    //alert('it\'s rocket science')
    this.setState({ rocket: true })
  }

  getBoyfriend = (index) => {

    return bfs[index % bfs.length]
  }
  handleOnClickBoyfriendButton = () => {
    this.setState({boyfriendNumber:getRandom()})
  }

  render() {
    console.log(this.state.boyfriendNumber)
    console.log(bfs[this.state.boyfriendNumber])
    const bfObject = bfs[this.state.boyfriendNumber]
    return (
      <div>
        <div className="header">
          <div className="logo">
            {this.renderLogo()}
          </div>
          <div>
            <button onClick= {this.handleOnClickBoyfriendButton}>MY BOYFRIENDS</button>
            {bfObject.name}
            {bfObject.emoji}
            <button style={{ fontSize: 32 }} onClick={this.handleOnClickRocketButton}>🚀</button>
          </div>
          <ul className="nav">
            <li className="menu1">
              <a className="projects">
                Projects
              </a>
            </li>
            <li className="menu2">
              <a className="about">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="wrapper">
        </div>
        <div>
          rocket: {this.state.rocket ? 'on' : 'off'}
        </div>
        <div className="body">
          <div style={{ backgroundColor: 'red', height: 100, width: '100%' }} />
          <div style={{ backgroundColor: 'green', height: 100, width: '100%' }} />
          <div style={{ backgroundColor: 'blue', height: 100, width: '100%' }} />
        </div>
      </div>
    );
  }
}

export default App;
