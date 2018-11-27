/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { CountView } from "./src/components/CounterView";
import AddTaskView from "./src/components/AddTaskView";
import ListTaskView from "./src/components/ListTaskView";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      data: [
        { title: "Go to the office", isFinished: true },
        { title: "Prepare tasks for today", isFinished: false },
        { title: "Team meeting", isFinished: false },
        { title: "Commit tasks changed", isFinished: false }
      ]
    };
  }
  onAddNewTask = taskName => {
    const newTask = { title: taskName, isFinished: false };
    const newTaskList = [...this.state.data, newTask];
    console.log(taskName);
    this.setState({ text: taskName });
    this.setState({ ...this.state, data: newTaskList });
  };
  onFinishedItem = index => {
    let newTaskList = this.state.data;
    let state = newTaskList[index].isFinished;
    newTaskList[index].isFinished = !state;
    this.setState({ data: newTaskList });
  };
  onDeleteItem = index => {
    let newTaskList = this.state.data.filter((item, i) => i != index);
    this.setState({ data: newTaskList });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textViewHeader}>
          <Text style={styles.textContain}>{titleApp}</Text>
        </View>
        <AddTaskView onAddNewTask={this.onAddNewTask} />
        {/* <CountView /> */}
        <ListTaskView
          listData={this.state.data}
          onFinishedItem={this.onFinishedItem}
          onDeleteItem={this.onDeleteItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA"
  },
  textViewHeader: {
    height: 50,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 5,
    shadowOpacity: 0.2
  },
  textContainHeader: {
    fontSize: 18,
    color: "white",
    marginTop: Platform.select({
      android: 0,
      ios: 20
    })
  }
});
const titleApp = "Test App React Native ";
