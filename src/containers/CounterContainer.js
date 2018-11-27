import React, { Component } from "react";
import { connect } from "react-redux";
import { addNumber, subNumber } from "../actions/NumberActions";
import CountView from "../components/CounterView";
class CounterContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { addNumber, subNumber } = this.props;
    const { number } = this.props.number;
    console.log("render CounterContainer" + JSON.stringify(this.props));
    return <CountView val={number} {...this.props} />;
  }
}

const mapStateToProps = state => {
  return { number: state.number };
};

const mapDispatchToProps = dispatch => {
  return {
    addNumber: val => dispatch(addNumber(val)),
    subNumber: val => dispatch(subNumber(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
