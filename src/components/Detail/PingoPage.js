import React, { Component } from 'react';
import Header from '../Header/Header';
import TopMain from './TopMain';
import projects from '../../constants/projects';
import '../App.css';
import UserJourneyMap from '../../img/uj.png';

class PingoPage extends Component {
  static defaultProps ={
    title: projects.pingo.title,
  }

  render() {
    const {title} = this.props
    return (
      <div className="pingoPage"> 
        <Header />
        <TopMain title={title}/>
        <div className="wrapper">
            <div className="contents">
              <div className="section overview">
                <h2>
                  Overview
                </h2>
                <p>
                  Pingo is a real time local information sharing service for travelers. Travelers can share photos of the situations that they encounter suddenly in their travels with other people. Walking down the street travelers will be able to find out the most useful information, such as a sweet bus king concert, a pop-up store filled with magical items, a luggage storage in a remote place, and sudden strikes. Travelers make their travel more exciting with PINGO.
                </p>
              </div>
              <div className="section research">
                <h2>
                  Research
                </h2>
                <p>
                  1. User journey map
                </p>
                <img className="ujmap"src={UserJourneyMap}/>
                <p>
                  Whole team brainstormed with the user Journey map. First, we divide the process of travel into several steps and write down what kind of behaviors and feelings the user experiences at each step. Next, we thought about pain points and needs at each step.
                </p>
                <p>
                  After sorting out some ideas from brainstorming, we did a simple desk research and compared ideas with the existing services. As a result, there are many services that satisfy the needs before trip and after the trip. On the other hand, we found that the services available during the trip were significantly fewer, so we decided to create a service that we could use while traveling.
                </p>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default PingoPage;
