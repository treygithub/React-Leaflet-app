import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { connect } from "react-redux";
import {getBikes} from '../../ducks/bikeReducer'
import './map.css';

class MapComponent extends Component {
  state = {
    
    lat: 31.169621,
    lng: -99.683617,
    zoom: 2,
  }


  render() {
    const position = [this.state.lat, this.state.lng]
    const MarkerDisplays = this.props.bikesReducer.bikes && this.props.bikesReducer.bikes.features.map((bike, i) => {
      const position = [bike.geometry.coordinates[1], bike.geometry.coordinates[0]]
      return (
        <Marker key={i} position={position}>
              <Popup>
                <span>{bike.properties.title}</span>
              </Popup>
        </Marker>
      )
    })

    return (
        <div className="map-container">
        <Map className="map" center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {MarkerDisplays}
            
          </Map>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

export default
  connect(
    mapStateToProps,
    { getBikes }
  )(MapComponent)
