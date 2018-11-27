import React, { Component } from "react";
import { StyleSheet, View, Button, Text } from "react-native";

export default class CountView extends Component {
  constructor(props) {
    super(props);
    console.log("render CountViewff" + JSON.stringify(props));
  }
  render() {
    const { val, addNumber, subNumber } = this.props;
    return (
      <View style={styles.CountView}>
        <Button title="SUB" onPress={() => subNumber(val - 1)} />
        <Text> Count : {val}</Text>
        <Button onPress={() => addNumber(val + 1)} title="Add" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  CountView: {
    marginTop: 10,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
