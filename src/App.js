import React, { Component } from 'react'
import Nav from './Components/Nav/Nav'
import MapComponent from './Components/Map/Map'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component{
  state = {
    play: true,
  }

  onTogglePlay = () => {
    this.setState({ play: !this.state.play })
  }

  render() {
    return (
      <div>
        <Nav/>
        <MapComponent/>
      </div>
    )
  }
}