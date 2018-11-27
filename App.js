/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flowll
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import CounterContainer from "./src/containers/CounterContainer";
import { Provider } from "react-redux";
import store from "./src/store/Store";
import TaskListContainer from "./src/containers/TaskListContainer";
import AddViewContainer from "./src/containers/AddViewContainer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  onAddNewTask = taskName => {
    const newTask = { title: taskName, isFinished: false };
    const newTaskList = [...this.state.data, newTask];
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
      <Provider store={store}>
        <View style={styles.container}>
          <View style={styles.textViewHeader}>
            <Text style={styles.textContain}>{titleApp}</Text>
          </View>
          <CounterContainer />
          <TaskListContainer />
        </View>
      </Provider>
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
    shadowColor: "",
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
