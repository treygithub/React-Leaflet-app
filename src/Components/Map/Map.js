import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { connect } from "react-redux";
import L from 'leaflet';
import MarkerClusterGroup from './react-leaflet-markercluster';
import {getBikes, makeClustered} from '../../ducks/bikeReducer'
import './map.css';

class MapComponent extends Component {
  state = {
    lat: 31.169621,
    lng: -99.683617,
    zoom: 2,
  }

  createClusterCustomIcon  = (cluster) => {
    return L.divIcon({
      html: `<span>${cluster.getChildCount()}</span>`,
      className: 'marker-cluster-custom',
      iconSize: L.point(40, 40, true),
    });
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
        <div className="map-container ">
        <Map className="map "  center={position} zoom={this.state.zoom}>
            <TileLayer 
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          
            {this.props.bikesReducer.clustered ? <MarkerClusterGroup
                showCoverageOnHover={false}
                spiderfyDistanceMultiplier={2}
                iconCreateFunction={this.createClusterCustomIcon}
              >
            {MarkerDisplays}
            </MarkerClusterGroup>:MarkerDisplays}
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
    { getBikes, makeClustered }
  )(MapComponent)