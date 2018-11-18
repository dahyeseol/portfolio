import React from 'react'
import './App.css'
import Main from './Main/Main'
import Contents from './Contents/Contents'
import DetailMain from './Detail/DetailMain'
import { Router } from '@reach/router'

const App = () => (
  <Router>
    <Home path="/" default />
    <DetailMain path="/projects/:projectId" />
  </Router>
)

export default App

const Home = () => (
  <div className="wrapper">
    <Main />
    <Contents />
  </div>
)
