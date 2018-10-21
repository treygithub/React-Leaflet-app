import React, {Component} from 'react'
import {Pie} from 'react-chartjs-2';
import './chart.css';
import { connect } from "react-redux";

class Chart extends Component {
// componentDidMount =()=>{

//         let hello = this.props.bikesReducer.bikes.features.map((bike, i) => {
//           return bike.properties.title })
//           .then(this.setState({
//               labels : hello
//           })
//           )
// }
state = {
    chartData:{}
  }


componentWillMount=()=>{
  this.getChartData();
}

getChartData =()=>{
  return (this.setState({
    chartData:{
      labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
      datasets:[
        {
          label:'Population',
          data:[
            617594,
            181045,
            153060,
            106519,
            105162,
            95072
          ],
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ]
        }
      ]
    }
  }))

}


render(){
    console.log("this is labels",this.state.chartData.labels)
  return (
    <div className="chart">
            {this.props.bikesReducer.bikes ?  <Pie
            data={this.state.chartData}
            width={25}
            height={15}
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