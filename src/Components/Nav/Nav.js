import React, {Component} from 'react'
import './nav.css'
import {Button, Tooltip} from 'reactstrap'
import { connect } from "react-redux";
import {getBikes, removeBikes, makeClustered} from '../../ducks/bikeReducer';

function noErrorMsg (state, props) {return{showErrorMsg: state.showErrorMsg = false}}


class Nav extends Component {
 state = {
  toggleAddButton: true,
  addButtonName: "Add Data",
  clusterButtonName: "Cluster Data",
  showErrorMsg: false
 }

  onClickAddData = () =>{
    this.setState(noErrorMsg)
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
    if(this.props.bikesReducer.bikes) {   
      if(this.props.bikesReducer.clustered) {
        this.setState({clusterButtonName: "Cluster Data"})
        this.props.makeClustered();
      } else {
        this.setState({clusterButtonName: "Scatter Data"})
        this.props.makeClustered();
      }
    } else {
       this.setState({showErrorMsg: true})
    }
  }

  render() {

    const {addButtonName,  clusterButtonName} = this.state;
    return (
      <div className="nav-container">
        <div className="nav">
          <Button onClick={this.onClickAddData} outline color="primary" size="sm">{addButtonName}</Button>{' '}
          <Button onClick={this.onClickClusterData} outline color="primary" size="sm" href="#" id="TooltipExample">{clusterButtonName}</Button>
        </div>
        {this.state.showErrorMsg ?  <Tooltip placement="bottom" isOpen={this.state.showErrorMsg} target="TooltipExample" toggle={this.onClickClusterData}>
        Please Add Data First!
        </Tooltip>: null}
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
    { getBikes, removeBikes, makeClustered }
  )(Nav)