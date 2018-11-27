import { connect } from "react-redux";
import React, { Component } from "react";
import AddTaskView from "../components/AddTaskView";
import { addTask } from "../actions/TaskListViewActions";
class AddViewContainer extends Component {
  render() {
    const addNewTask = this.props;
    return <AddTaskView addNewTask={addNewTask} />;
  }
}

export default connect(
  state => {
    return {};
  },
  dispatch => {
    return {
        addNewTask: taskName => dispatch(addTask(taskName))
    };
  }
)(AddViewContainer);
