import React, {Component} from 'react'
import {Pie} from 'react-chartjs-2';
import './chart.css';
import { connect } from "react-redux";

class Chart extends Component {

state = {
    chartData:{}
  }

componentDidMount=()=>{
  this.getChartData();
}

getChartData =()=>{
  return (this.setState({
    chartData:{
      labels: [],
      datasets:[
        {
          label:'',
          data:[],
          backgroundColor:[]
        }
      ]
    }
  }))

}

render(){
    console.log("this is labels",this.state.chartData.labels)
  return (
    <div className="chart-container">
          <div className="chart">
              <Pie
              data={this.state.chartData}
              width={100}
              height={50}
              options={{}}
              /> 
        </div>
    </div>
  )
}
}

const mapStateToProps = state => {
    return state;
  };

export default
  connect( mapStateToProps )(Chart)