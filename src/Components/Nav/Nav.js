import React from 'react'
import './nav.css'
import {Button} from 'reactstrap'
import { connect } from "react-redux";
import {getBikes, removeBikes} from '../../ducks/bikeReducer'

//2146824698

class Nav extends React.Component {
 state = {
  toggleAddButton: true,
  addButtonName: "Add Data",
  clusterButtonName: "Cluster Data",
  toggleClusterButton: true,
 }
  onClickAddData = () =>{
    this.setState(
      { toggleAddButton: !this.state.toggleAddButton },
      () => {
        
        if(this.state.toggleAddButton) {
           this.setState({addButtonName: "Add Data"})
        } else {
           this.setState({addButtonName: "Remove Data"})
        }
        if(this.state.toggleAddButton){
          this.props.removeBikes();
        } else {
          this.props.getBikes();
        }
      }
    );
    
  }

  onClickClusterData = () =>{
    this.setState(
      { toggleClusterButton: !this.state.toggleClusterButton },
      () => {
        
        if(this.state.toggleClusterButton) {
           this.setState({clusterButtonName: "Cluster Data"})
        } else {
           this.setState({clusterButtonName: "Scatter Data"})
        }
        if(this.state.toggleClusterButton){
          // this.props.removeBikes();
        } else {
          // this.props.getBikes();
        }
      }
    );
    
  }



  render() {
    this.props.bikesReducer.bikes && console.log(this.props.bikesReducer.bikes.features);
    const {addButtonName,  clusterButtonName} = this.state;
    console.log(this.props.bikesReducer)
    return (
      <div className="nav-container">
      <div className="nav">
      <Button onClick={this.onClickAddData} outline color="primary" size="sm">{addButtonName}</Button>{' '}
      <Button onClick={this.onClickClusterData} outline color="primary" size="sm">{clusterButtonName}</Button>
        </div>
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
    { getBikes, removeBikes }
  )(Nav)
