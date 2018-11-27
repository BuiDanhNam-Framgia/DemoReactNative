import React, { Component } from "react";
import { connect } from "react-redux";
import ListTaskView from "../components/ListTaskView";
import { finishTask, deleteTask } from "../actions/TaskListViewActions";
class TaskListContainer extends Component {
  render() {
    const listData = this.props.listData;
    const { onDeleteItem, onFinishedItem } = this.props;
    console.log("render TaskList" + JSON.stringify(this.props));

    return (
      <ListTaskView
        onDeleteItem={onDeleteItem}
        onFinishedItem={onFinishedItem}
        listData={listData}
      />
    );
  }
}
export default connect(
  state => {
    return { listData: state.taskList.data };
  },
  dispatch => {
    return {
      onDeleteItem: index => dispatch(deleteTask(index)),
      onFinishedItem: index => dispatch(finishTask(index))
    };
  }
)(TaskListContainer);
