import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";

export default class AddTaskView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: ""
    };
  }

  render() {
    const addNewTask = this.props;
    return (
      <View style={styles.viewContain}>
        <TextInput
          value={this.state.taskName}
          placeholder="task name"
          onChangeText={text => {
            this.setState({ taskName: text });
          }}
          style={{
            marginLeft: 10,
            flex: 4,
            borderRadius: 5,
            marginRight: 5,
            borderColor: "lightgray",
            borderWidth: 1
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={addNewTask(this.state.taskName)}
        >
          <Text style={{ color: "white" }}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewContain: {
    marginTop: 10,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    borderRadius: 5,
    backgroundColor: "#2196F3",
    padding: 7
  }
});
