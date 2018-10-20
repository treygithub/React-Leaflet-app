import React, {Component} from 'react'
import {Pie} from 'react-chartjs-2';
import './chart.css';
import { connect } from "react-redux";

class Chart extends Component {
state = {
    chartData:{
        labels:  function () {
            this.props.bikesReducer.bikes.features.map((bike, i) => {
             return  bike.properties.title })}
    }
}

render(){
  return (
    <div className="chart">
            {this.props.bikesReducer.bikes ?  <Pie
            data={this.state.chartData}
            width={100}
            height={50}
            options={{}}
        /> : null }
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
    {  }
  )(Chart)