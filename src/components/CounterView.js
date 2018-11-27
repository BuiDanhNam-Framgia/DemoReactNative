import React, { Component } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import PropTypes from "prop-types";
export class CountView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1
    };
  }
  render() {
    return (
      <View style={styles.CountView}>
        <Button
          title="SUB"
          onPress={() => {
            this.setState({ number: this.state.number - 1 });
          }}
        />
        <Text> Count : {this.state.number}</Text>
        <Button
          title="ADD"
          onPress={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        />
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
