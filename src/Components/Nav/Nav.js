import React from 'react'
import './nav.css'
import {Button, Tooltip} from 'reactstrap'
import { connect } from "react-redux";
import {getBikes, removeBikes, makeClustered} from '../../ducks/bikeReducer';

class Nav extends React.Component {
 state = {
  toggleAddButton: true,
  addButtonName: "Add Data",
  clusterButtonName: "Cluster Data",
  showErrorMsg: false,
  tooltipOpen: false
 }

  onClickAddData = () =>{
    this.setState({showErrorMsg: false})
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

  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    console.log("this is state from nav", this.state)
    console.log("loading...",this.props.bikesReducer.loading)
    const {addButtonName,  clusterButtonName} = this.state;
    return (
      <div className="nav-container">
        <div className="nav">
          <Button onClick={this.onClickAddData} outline color="primary" size="sm">{addButtonName}</Button>{' '}
          <Button onClick={this.onClickClusterData} outline color="primary" size="sm" href="#" id="TooltipExample">{clusterButtonName}</Button>
        </div>
        {this.state.showErrorMsg ?  <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
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
